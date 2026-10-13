"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { BotaoPdf } from "@/components/BotaoPdf"
import { FiltrosCard } from "@/components/FiltrosCard"
import { ListaCard } from "@/components/ListaCard"
import { TIPOS_DOCUMENTOS, ehTipoDocumento } from "@/data/documentos"
import { useColecao } from "@/hooks/useApi"
import { useFiltros, type ConfiguracaoFiltros } from "@/hooks/useFiltros"
import { baixarCsv, type ColunaCsv } from "@/lib/csv"
import { formatarData, maiorAtualizacao } from "@/lib/formato"
import type { Documento, TipoDocumento } from "@/types/api"

const configuracao: ConfiguracaoFiltros<Documento> = {
  obterData: (documento) => documento.data,
  campos: [
    { nome: "numero", label: "Número", tipo: "texto", placeholder: "Ex: 001/2026", obterValor: (documento) => documento.numero },
    {
      nome: "descricao",
      label: "Descrição",
      tipo: "texto",
      placeholder: "Buscar no título ou na descrição...",
      largura: "total",
      obterValor: (documento) => `${documento.titulo} ${documento.descricao}`,
    },
  ],
}

const colunasCsv: ColunaCsv<Documento>[] = [
  { titulo: "Tipo", valor: (documento) => TIPOS_DOCUMENTOS[documento.tipo] ?? documento.tipo },
  { titulo: "Título", valor: (documento) => documento.titulo },
  { titulo: "Número", valor: (documento) => documento.numero },
  { titulo: "Data", valor: (documento) => formatarData(documento.data) },
  { titulo: "Descrição", valor: (documento) => documento.descricao },
  { titulo: "Arquivo", valor: (documento) => documento.arquivoUrl },
]

interface DocumentosListaProps {
  tipo: TipoDocumento | null
}

function DocumentosLista({ tipo }: DocumentosListaProps) {
  const tituloTipo = tipo ? TIPOS_DOCUMENTOS[tipo] : "Documentos Oficiais"

  const { itens, carregando, erro } = useColecao("documentos", { tipo: tipo ?? undefined })
  const documentos = useMemo(() => (tipo ? itens.filter((documento) => documento.tipo === tipo) : itens), [itens, tipo])
  const controle = useFiltros(documentos, configuracao)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <FiltrosCard
          campos={configuracao.campos}
          controle={controle}
          onExportar={() => baixarCsv(tipo ?? "documentos", colunasCsv, controle.filtrados)}
        />

        <ListaCard
          titulo={tituloTipo}
          total={controle.filtrados.length}
          atualizadoEm={maiorAtualizacao(documentos)}
          carregando={carregando}
          erro={erro}
          mensagemVazio="Nenhum documento encontrado."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Documento</th>
                  <th className="px-6 py-3">Número</th>
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3">Descrição</th>
                  <th className="px-6 py-3 text-center">Arquivo</th>
                </tr>
              </thead>
              <tbody>
                {controle.filtrados.map((documento) => (
                  <tr key={documento.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-text-primary">{documento.titulo}</td>
                    <td className="px-6 py-3 text-text-primary/70">{documento.numero}</td>
                    <td className="px-6 py-3 text-text-primary/70">{formatarData(documento.data)}</td>
                    <td className="px-6 py-3 text-text-primary/70">{documento.descricao}</td>
                    <td className="px-6 py-3 text-center">
                      <BotaoPdf href={documento.arquivoUrl} />
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

function DocumentosContent() {
  const tipoParam = useSearchParams().get("tipo") ?? ""
  const tipo = ehTipoDocumento(tipoParam) ? tipoParam : null
  return <DocumentosLista key={tipo ?? "todos"} tipo={tipo} />
}

export default function Documentos() {
  return (
    <Suspense>
      <DocumentosContent />
    </Suspense>
  )
}
