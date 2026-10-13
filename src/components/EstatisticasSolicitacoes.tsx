"use client"

import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { useApi } from "@/hooks/useApi"
import { useSolicitacoesRegistradas } from "@/hooks/useSolicitacoesRegistradas"
import type { Canal, EstatisticasSolicitacoes as Estatisticas } from "@/types/api"

interface EstatisticasSolicitacoesProps {
  canal: Canal
}

interface GrupoContagemProps {
  titulo: string
  contagem: Record<string, number>
}

function GrupoContagem({ titulo, contagem }: GrupoContagemProps) {
  const linhas = Object.entries(contagem).sort(([, a], [, b]) => b - a)

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-blue-primary mb-3 text-sm">{titulo}</h4>
      {linhas.length === 0 ? (
        <p className="text-sm text-text-primary/60">Sem registros.</p>
      ) : (
        <ul className="space-y-2">
          {linhas.map(([rotulo, quantidade]) => (
            <li key={rotulo} className="flex items-center justify-between gap-4 text-sm text-text-primary">
              <span>{rotulo}</span>
              <strong>{quantidade}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function EstatisticasSolicitacoes({ canal }: EstatisticasSolicitacoesProps) {
  const { dados, carregando, erro } = useApi<Estatisticas>(`/public/${canal}/estatisticas`, useSolicitacoesRegistradas())

  return (
    <ConteudoRemoto carregando={carregando} erro={erro} vazio={!dados} mensagemVazio="Nenhuma estatística disponível.">
      {dados && (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <p className="text-3xl font-bold text-blue-primary">{dados.total}</p>
            <p className="text-sm text-text-primary/60">Total de pedidos</p>
          </div>
          <GrupoContagem titulo="Por situação" contagem={dados.porSituacao ?? {}} />
          <GrupoContagem titulo="Por tipo" contagem={dados.porTipo ?? {}} />
          <GrupoContagem titulo="Por grau de sigilo" contagem={dados.porSigilo ?? {}} />
        </div>
      )}
    </ConteudoRemoto>
  )
}
