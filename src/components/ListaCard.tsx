import type { ReactNode } from "react"
import { BsClockFill } from "react-icons/bs"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { formatarDataHora } from "@/lib/formato"

interface ListaCardProps {
  titulo: string
  total: number
  atualizadoEm: string | null
  carregando: boolean
  erro: Error | null
  mensagemVazio: string
  children: ReactNode
}

export function ListaCard({ titulo, total, atualizadoEm, carregando, erro, mensagemVazio, children }: ListaCardProps) {
  const pronto = !carregando && !erro

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg font-semibold text-text-primary">
          {titulo}
          {pronto && (
            <span className="text-sm font-normal text-text-primary/60 ml-2">
              ({total} {total === 1 ? "registro encontrado" : "registros encontrados"})
            </span>
          )}
        </h3>
        {pronto && atualizadoEm && (
          <div className="text-text-primary text-sm flex items-center gap-1">
            <BsClockFill size={12} />
            <em>Informações atualizadas em: {formatarDataHora(atualizadoEm)}</em>
          </div>
        )}
      </div>
      <ConteudoRemoto carregando={carregando} erro={erro} vazio={total === 0} mensagemVazio={mensagemVazio}>
        {children}
      </ConteudoRemoto>
    </div>
  )
}
