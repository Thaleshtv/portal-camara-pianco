import { TIPOS_DOCUMENTOS } from "@/data/documentos"
import { menuItems } from "@/data/menu"
import { paginasUtilitarias } from "@/data/paginasUtilitarias"
import { itensTransparencia } from "@/data/transparencia"
import { formatarData, normalizarTexto } from "@/lib/formato"
import { tituloLicitacao } from "@/lib/licitacoes"
import { rotaLicitacao, rotaNoticia, rotaVereador } from "@/lib/rotas"
import type { DiarioOficial, Documento, DocumentoTransparencia, Licitacao, Norma, Noticia, Vereador } from "@/types/api"

export interface ResultadoBusca {
  titulo: string
  descricao: string
  href: string
  categoria: string
  externo?: boolean
}

export interface ConteudoPesquisavel {
  noticias: Noticia[]
  licitacoes: Licitacao[]
  diarios: DiarioOficial[]
  vereadores: Vereador[]
  leis: Norma[]
  regimentos: Norma[]
  documentos: Documento[]
  transparencia: DocumentoTransparencia[]
}

const paginasMenu: ResultadoBusca[] = menuItems.flatMap((item) =>
  [...(item.children ?? []), ...(item.subMenu?.children ?? [])]
    .filter((link) => !link.disabled)
    .map((link) => ({ titulo: link.label, descricao: item.label, href: link.href, categoria: "Página" }))
)

const paginasFixas: ResultadoBusca[] = [
  { titulo: "Notícias", descricao: "Todas as notícias", href: "/informa", categoria: "Página" },
  ...paginasMenu,
  ...paginasUtilitarias.map((pagina) => ({
    titulo: pagina.label,
    descricao: "Utilidades",
    href: pagina.href,
    categoria: "Página",
  })),
  ...itensTransparencia.map((item) => ({
    titulo: item.titulo,
    descricao: item.descricao,
    href: `/transparencia/${item.slug}`,
    categoria: "Transparência",
  })),
]

function normaParaResultado(norma: Norma, categoria: string, paginaLista: string): ResultadoBusca {
  return {
    titulo: `${norma.tipo} - ${norma.numero}`,
    descricao: norma.ementa,
    href: norma.arquivoUrl ?? paginaLista,
    categoria,
    externo: norma.arquivoUrl !== null,
  }
}

export function montarIndice(conteudo: ConteudoPesquisavel): ResultadoBusca[] {
  return [
    ...paginasFixas,
    ...conteudo.noticias.map((noticia) => ({
      titulo: noticia.title,
      descricao: noticia.description,
      href: rotaNoticia(noticia.id),
      categoria: "Notícia",
    })),
    ...conteudo.licitacoes.map((licitacao) => ({
      titulo: tituloLicitacao(licitacao),
      descricao: licitacao.objetoCompleto || licitacao.objeto,
      href: rotaLicitacao(licitacao.slug),
      categoria: "Licitação",
    })),
    ...conteudo.diarios.map((diario) => ({
      titulo: diario.edicao,
      descricao: diario.descricao,
      href: diario.arquivoUrl,
      categoria: "Diário Oficial",
      externo: true,
    })),
    ...conteudo.vereadores.map((vereador) => ({
      titulo: vereador.name,
      descricao: `${vereador.fullName} - ${vereador.role}`,
      href: rotaVereador(vereador.id),
      categoria: "Vereador",
    })),
    ...conteudo.leis.map((lei) => normaParaResultado(lei, "Lei", "/leis")),
    ...conteudo.regimentos.map((regimento) => normaParaResultado(regimento, "Regimento Interno", "/regimento-interno")),
    ...conteudo.documentos.map((documento) => ({
      titulo: [documento.titulo, documento.numero].filter(Boolean).join(" - "),
      descricao: documento.descricao || `${TIPOS_DOCUMENTOS[documento.tipo] ?? "Documento"} de ${formatarData(documento.data)}`,
      href: documento.arquivoUrl,
      categoria: TIPOS_DOCUMENTOS[documento.tipo] ?? "Documento",
      externo: true,
    })),
    ...conteudo.transparencia.map((documento) => ({
      titulo: documento.titulo,
      descricao: documento.descricao || `Publicado em ${formatarData(documento.data)}`,
      href: documento.arquivoUrl,
      categoria: "Transparência",
      externo: true,
    })),
  ]
}

export function buscar(indice: ResultadoBusca[], termo: string): ResultadoBusca[] {
  const palavras = normalizarTexto(termo).split(/\s+/).filter(Boolean)
  if (palavras.length === 0) {
    return []
  }
  return indice.filter((resultado) => {
    const conteudo = normalizarTexto(`${resultado.titulo} ${resultado.descricao} ${resultado.categoria}`)
    return palavras.every((palavra) => conteudo.includes(palavra))
  })
}
