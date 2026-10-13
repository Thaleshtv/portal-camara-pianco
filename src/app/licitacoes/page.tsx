"use client"

import { useMemo } from "react"
import Link from "next/link"
import { BsArrowRight, BsFileEarmarkPdf } from "react-icons/bs"
import { FiltrosCard } from "@/components/FiltrosCard"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { useFiltros, type ConfiguracaoFiltros } from "@/hooks/useFiltros"
import { baixarCsv, type ColunaCsv } from "@/lib/csv"
import { formatarData, maiorAtualizacao, valoresDistintos } from "@/lib/formato"
import { tituloLicitacao } from "@/lib/licitacoes"
import { rotaLicitacao } from "@/lib/rotas"
import type { Licitacao } from "@/types/api"

const configuracao: ConfiguracaoFiltros<Licitacao> = {
  obterData: (licitacao) => licitacao.dataPublicacao,
  campos: [
    { nome: "modalidade", label: "Modalidade", tipo: "selecao", obterValor: (licitacao) => licitacao.modalidade },
    { nome: "numero", label: "Número", tipo: "texto", placeholder: "Ex: 00001/2026", obterValor: (licitacao) => licitacao.numero },
    {
      nome: "objeto",
      label: "Objeto",
      tipo: "texto",
      placeholder: "Buscar no objeto...",
      largura: "dupla",
      obterValor: (licitacao) => `${licitacao.objeto} ${licitacao.objetoCompleto}`,
    },
  ],
}

const colunasCsv: ColunaCsv<Licitacao>[] = [
  { titulo: "Número", valor: (licitacao) => licitacao.numero },
  { titulo: "Processo administrativo", valor: (licitacao) => licitacao.processoAdministrativo },
  { titulo: "Modalidade", valor: (licitacao) => licitacao.modalidade },
  { titulo: "Objeto", valor: (licitacao) => licitacao.objetoCompleto || licitacao.objeto },
  { titulo: "Valor estimado", valor: (licitacao) => licitacao.valorEstimado },
  { titulo: "Data de publicação", valor: (licitacao) => formatarData(licitacao.dataPublicacao) },
  { titulo: "Data de realização", valor: (licitacao) => licitacao.dataRealizacao },
  { titulo: "Participante", valor: (licitacao) => licitacao.participante },
  { titulo: "CNPJ do participante", valor: (licitacao) => licitacao.cnpjParticipante },
  { titulo: "Valor da proposta", valor: (licitacao) => licitacao.valorProposta },
  { titulo: "Situação", valor: (licitacao) => licitacao.situacao },
]

export default function Licitacoes() {
  const { itens, carregando, erro } = useColecao("licitacoes")
  const controle = useFiltros(itens, configuracao)
  const opcoes = useMemo(() => ({ modalidade: valoresDistintos(itens, (licitacao) => licitacao.modalidade) }), [itens])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <FiltrosCard
          campos={configuracao.campos}
          controle={controle}
          opcoes={opcoes}
          onExportar={() => baixarCsv("licitacoes", colunasCsv, controle.filtrados)}
        />

        <ListaCard
          titulo="Licitações"
          total={controle.filtrados.length}
          atualizadoEm={maiorAtualizacao(itens)}
          carregando={carregando}
          erro={erro}
          mensagemVazio="Nenhuma licitação encontrada."
        >
          <div className="p-6 space-y-4">
            {controle.filtrados.map((licitacao) => (
              <div
                key={licitacao.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-primary hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <Link
                    href={rotaLicitacao(licitacao.slug)}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 group"
                  >
                    <h4 className="text-blue-primary font-bold uppercase text-sm group-hover:underline">
                      {tituloLicitacao(licitacao)}
                      <span className="font-normal italic text-xs text-text-primary/60 ml-2 normal-case no-underline">
                        Publicado em {formatarData(licitacao.dataPublicacao)}
                      </span>
                    </h4>
                    {licitacao.situacao && (
                      <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit">
                        {licitacao.situacao}
                      </span>
                    )}
                  </Link>
                  <Link
                    href={rotaLicitacao(licitacao.slug)}
                    className="text-sm text-text-primary/70 hover:text-blue-primary transition-colors"
                  >
                    <strong>Modalidade:</strong> {licitacao.modalidade} &bull; <strong>Objeto:</strong> {licitacao.objeto}
                  </Link>
                  <div className="flex flex-wrap items-center gap-2">
                    {licitacao.arquivos.map((arquivo) => (
                      <a
                        key={arquivo.url}
                        href={arquivo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 text-red-700 hover:bg-red-100 text-xs font-medium px-3 py-2 rounded transition-colors"
                      >
                        <BsFileEarmarkPdf size={14} />
                        {arquivo.nome}
                      </a>
                    ))}
                    <Link
                      href={rotaLicitacao(licitacao.slug)}
                      className="inline-flex items-center gap-2 bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white text-xs font-medium px-3 py-2 rounded transition-colors ml-auto"
                    >
                      Ver detalhes <BsArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ListaCard>
      </div>
    </section>
  )
}
