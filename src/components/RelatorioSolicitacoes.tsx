"use client"

import { BsDownload } from "react-icons/bs"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { PageCard } from "@/components/PageCard"
import { useApi } from "@/hooks/useApi"
import { useSolicitacoesRegistradas } from "@/hooks/useSolicitacoesRegistradas"
import { formatarData } from "@/lib/formato"
import { apiConfigurada, urlRelatorioCsv } from "@/services/api"
import type { Canal, LinhaRelatorio } from "@/types/api"

interface RelatorioSolicitacoesProps {
  canal: Canal
  titulo: string
}

export function RelatorioSolicitacoes({ canal, titulo }: RelatorioSolicitacoesProps) {
  const { dados, carregando, erro } = useApi<LinhaRelatorio[]>(`/public/${canal}/relatorio`, useSolicitacoesRegistradas())
  const linhas = Array.isArray(dados) ? dados : []

  return (
    <PageCard
      title={titulo}
      bodyClassName=""
      action={
        apiConfigurada() ? (
          <a
            href={urlRelatorioCsv(canal)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors w-fit"
          >
            <BsDownload size={14} /> Baixar CSV
          </a>
        ) : null
      }
    >
      <ConteudoRemoto carregando={carregando} erro={erro} vazio={linhas.length === 0} mensagemVazio="Nenhum pedido registrado.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
              <tr>
                <th className="px-6 py-3">Protocolo</th>
                <th className="px-6 py-3">Tipo</th>
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Situação</th>
                <th className="px-6 py-3">Sigilo</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha) => (
                <tr key={linha.protocolo} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-text-primary whitespace-nowrap">{linha.protocolo}</td>
                  <td className="px-6 py-3 text-text-primary/70">{linha.tipo}</td>
                  <td className="px-6 py-3 text-text-primary/70">{formatarData(linha.data)}</td>
                  <td className="px-6 py-3 text-text-primary/70">{linha.situacao}</td>
                  <td className="px-6 py-3 text-text-primary/70">{linha.sigilo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ConteudoRemoto>
    </PageCard>
  )
}
