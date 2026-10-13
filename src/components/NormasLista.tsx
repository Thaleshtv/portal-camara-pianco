"use client"

import { useMemo } from "react"
import { BsEyeFill } from "react-icons/bs"
import { FiltrosCard } from "@/components/FiltrosCard"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { useFiltros, type ConfiguracaoFiltros } from "@/hooks/useFiltros"
import { baixarCsv, type ColunaCsv } from "@/lib/csv"
import { formatarData, maiorAtualizacao, valoresDistintos } from "@/lib/formato"
import type { Norma } from "@/types/api"

interface NormasListaProps {
  colecao: "leis" | "regimentos"
  titulo: string
  mensagemVazio: string
}

const configuracao: ConfiguracaoFiltros<Norma> = {
  obterData: (norma) => norma.data,
  campos: [
    { nome: "tipo", label: "Tipo", tipo: "selecao", obterValor: (norma) => norma.tipo },
    { nome: "numero", label: "Número", tipo: "texto", placeholder: "Ex: 01/2026", obterValor: (norma) => norma.numero },
    { nome: "ementa", label: "Descrição", tipo: "texto", placeholder: "Buscar na descrição...", largura: "dupla", obterValor: (norma) => norma.ementa },
  ],
}

const colunasCsv: ColunaCsv<Norma>[] = [
  { titulo: "Tipo", valor: (norma) => norma.tipo },
  { titulo: "Número", valor: (norma) => norma.numero },
  { titulo: "Data", valor: (norma) => formatarData(norma.data) },
  { titulo: "Ementa", valor: (norma) => norma.ementa },
  { titulo: "Arquivo", valor: (norma) => norma.arquivoUrl ?? "" },
]

export function NormasLista({ colecao, titulo, mensagemVazio }: NormasListaProps) {
  const { itens, carregando, erro } = useColecao(colecao)
  const controle = useFiltros(itens, configuracao)
  const opcoes = useMemo(() => ({ tipo: valoresDistintos(itens, (norma) => norma.tipo) }), [itens])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <FiltrosCard
          campos={configuracao.campos}
          controle={controle}
          opcoes={opcoes}
          onExportar={() => baixarCsv(colecao, colunasCsv, controle.filtrados)}
        />

        <ListaCard
          titulo={titulo}
          total={controle.filtrados.length}
          atualizadoEm={maiorAtualizacao(itens)}
          carregando={carregando}
          erro={erro}
          mensagemVazio={mensagemVazio}
        >
          <div className="p-6 space-y-4">
            {controle.filtrados.map((norma) => (
              <div key={norma.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-blue-primary font-bold uppercase text-sm">
                      {norma.tipo} - {norma.numero}
                      <span className="font-normal italic text-xs text-text-primary/60 ml-2">{formatarData(norma.data)}</span>
                    </p>
                    <p className="text-sm text-text-primary/70 mt-2">{norma.ementa}</p>
                  </div>
                  {norma.arquivoUrl && (
                    <a
                      href={norma.arquivoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 self-start lg:self-center"
                    >
                      <BsEyeFill /> Acessar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ListaCard>
      </div>
    </section>
  )
}
