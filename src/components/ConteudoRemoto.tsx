import type { ReactNode } from "react"
import { EmptyState } from "@/components/EmptyState"
import { ErrorState } from "@/components/ErrorState"
import { LoadingState } from "@/components/LoadingState"

interface ConteudoRemotoProps {
  carregando: boolean
  erro: Error | null
  vazio: boolean
  mensagemVazio: string
  mensagemErro?: string
  children: ReactNode
}

export function ConteudoRemoto({ carregando, erro, vazio, mensagemVazio, mensagemErro, children }: ConteudoRemotoProps) {
  if (carregando) {
    return <LoadingState />
  }
  if (erro) {
    return <ErrorState message={mensagemErro} />
  }
  if (vazio) {
    return <EmptyState message={mensagemVazio} />
  }
  return <>{children}</>
}
