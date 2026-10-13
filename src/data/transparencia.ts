export interface ItemTransparencia {
  slug: string
  titulo: string
  descricao: string
}

export interface LinkTransparencia {
  titulo: string
  href: string
  externo?: boolean
}

export const itensTransparencia: ItemTransparencia[] = [
  {
    slug: "acordos-convenios",
    titulo: "Acordos/Convênios",
    descricao: "Acordos, convênios, termos de cooperação e instrumentos congêneres firmados pela Câmara Municipal.",
  },
  {
    slug: "apreciacao-julgamento",
    titulo: "Apreciação e/ou Julgamento",
    descricao: "Apreciação e julgamento das contas anuais do Poder Executivo pela Câmara Municipal, com os respectivos pareceres do Tribunal de Contas.",
  },
  {
    slug: "concursos-processos-seletivos",
    titulo: "Concursos e Processos Seletivos",
    descricao: "Editais, resultados e demais atos de concursos públicos e processos seletivos realizados pela Câmara Municipal.",
  },
  {
    slug: "diarias",
    titulo: "Diárias",
    descricao: "Relação de diárias e passagens concedidas a vereadores e servidores, com beneficiário, destino, período e valor.",
  },
  {
    slug: "funcionarios-terceirizados",
    titulo: "Funcionários Terceirizados",
    descricao: "Relação dos trabalhadores terceirizados que prestam serviço à Câmara Municipal, com empresa contratante e função.",
  },
  {
    slug: "relacao-estagiarios",
    titulo: "Relação de Estagiários",
    descricao: "Relação dos estagiários em atividade na Câmara Municipal.",
  },
  {
    slug: "plano-estrategico",
    titulo: "Plano Estratégico",
    descricao: "Planejamento estratégico institucional da Câmara Municipal, com objetivos, metas e indicadores.",
  },
  {
    slug: "planos-anuais-contratacoes",
    titulo: "Planos Anuais de Contratações",
    descricao: "Planos de Contratações Anuais (PCA), conforme a Lei nº 14.133/2021.",
  },
  {
    slug: "prestacao-contas-gestao",
    titulo: "Prestação de Contas da Gestão",
    descricao: "Prestações de contas anuais da gestão da Câmara Municipal encaminhadas ao Tribunal de Contas.",
  },
  {
    slug: "lei-responsabilidade-fiscal",
    titulo: "Lei de Responsabilidade Fiscal",
    descricao: "Relatórios de Gestão Fiscal (RGF) e demais demonstrativos exigidos pela Lei Complementar nº 101/2000.",
  },
  {
    slug: "relatorio-gestao",
    titulo: "Relatório de Gestão",
    descricao: "Relatórios de gestão e de atividades da Câmara Municipal.",
  },
  {
    slug: "regulamentacao-cotas",
    titulo: "Regulamentação e Cotas",
    descricao: "Normas que regulamentam verbas e cotas parlamentares, com a respectiva prestação de contas.",
  },
  {
    slug: "obras",
    titulo: "Obras",
    descricao: "Informações sobre obras contratadas pela Câmara Municipal, com objeto, situação, valores e responsáveis.",
  },
  {
    slug: "contratos",
    titulo: "Contratos",
    descricao: "Contratos firmados pela Câmara Municipal e seus aditivos.",
  },
  {
    slug: "licitantes-contratados",
    titulo: "Relação dos Licitantes Contratados",
    descricao: "Relação das empresas e pessoas contratadas pela Câmara Municipal por meio de licitação, dispensa ou inexigibilidade.",
  },
  {
    slug: "adesao-atas-srp",
    titulo: "Adesão a Atas SRP",
    descricao: "Adesões a atas de Sistema de Registro de Preços (SRP) realizadas pela Câmara Municipal.",
  },
  {
    slug: "balancos-anuais",
    titulo: "Balanços Anuais",
    descricao: "Balanços orçamentário, financeiro e patrimonial e demonstração das variações patrimoniais.",
  },
  {
    slug: "regulamentacao-lai-governo-digital",
    titulo: "Regulamentação LAI e Governo Digital",
    descricao: "Normas que regulamentam a Lei de Acesso à Informação (Lei nº 12.527/2011) e a Lei do Governo Digital (Lei nº 14.129/2021) no âmbito da Câmara Municipal.",
  },
]

export const linksTransparencia: LinkTransparencia[] = [
  { titulo: "Carta de Serviços", href: "/carta-de-servicos" },
  { titulo: "Ouvidoria", href: "/ouvidoria" },
  { titulo: "E-SIC", href: "/esic" },
  { titulo: "Estrutura Organizacional", href: "/estrutura-organizacional" },
  { titulo: "Licitações", href: "/licitacoes" },
  { titulo: "Diário Oficial", href: "/diario-oficial" },
]

export function getItemTransparencia(slug: string): ItemTransparencia | undefined {
  return itensTransparencia.find((item) => item.slug === slug)
}
