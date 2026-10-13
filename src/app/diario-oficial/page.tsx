"use client"

import { BotaoPdf } from "@/components/BotaoPdf"
import { FiltrosCard } from "@/components/FiltrosCard"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { useFiltros, type ConfiguracaoFiltros } from "@/hooks/useFiltros"
import { baixarCsv, type ColunaCsv } from "@/lib/csv"
import { formatarData, maiorAtualizacao } from "@/lib/formato"
import type { DiarioOficial } from "@/types/api"

const configuracao: ConfiguracaoFiltros<DiarioOficial> = {
  obterData: (diario) => diario.data,
  campos: [
    { nome: "edicao", label: "Edição", tipo: "texto", placeholder: "Ex: 07 de agosto", obterValor: (diario) => diario.edicao },
    {
      nome: "descricao",
      label: "Descrição",
      tipo: "texto",
      placeholder: "Buscar na descrição...",
      largura: "total",
      obterValor: (diario) => diario.descricao,
    },
  ],
}

const colunasCsv: ColunaCsv<DiarioOficial>[] = [
  { titulo: "Edição", valor: (diario) => diario.edicao },
  { titulo: "Data", valor: (diario) => formatarData(diario.data) },
  { titulo: "Descrição", valor: (diario) => diario.descricao },
  { titulo: "Arquivo", valor: (diario) => diario.arquivoUrl },
]

export default function DiarioOficialPage() {
  const { itens, carregando, erro } = useColecao("diarios")
  const controle = useFiltros(itens, configuracao)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <FiltrosCard
          campos={configuracao.campos}
          controle={controle}
          onExportar={() => baixarCsv("diario-oficial", colunasCsv, controle.filtrados)}
        />

        <ListaCard
          titulo="Diário Oficial do Poder Legislativo"
          total={controle.filtrados.length}
          atualizadoEm={maiorAtualizacao(itens)}
          carregando={carregando}
          erro={erro}
          mensagemVazio="Nenhum diário oficial encontrado."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Edição</th>
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3">Descrição</th>
                  <th className="px-6 py-3 text-center">Arquivo</th>
                </tr>
              </thead>
              <tbody>
                {controle.filtrados.map((diario) => (
                  <tr key={diario.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-text-primary">{diario.edicao}</td>
                    <td className="px-6 py-3 text-text-primary/70">{formatarData(diario.data)}</td>
                    <td className="px-6 py-3 text-text-primary/70">{diario.descricao}</td>
                    <td className="px-6 py-3 text-center">
                      <BotaoPdf href={diario.arquivoUrl} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ListaCard>
      </div>
    </section>
  )
}
