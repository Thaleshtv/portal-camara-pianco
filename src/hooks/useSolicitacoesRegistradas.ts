"use client"

import { useSyncExternalStore } from "react"

const EVENTO_SOLICITACAO = "solicitacao-registrada"
let totalRegistradas = 0

function subscribe(callback: () => void): () => void {
  window.addEventListener(EVENTO_SOLICITACAO, callback)
  return () => window.removeEventListener(EVENTO_SOLICITACAO, callback)
}

export function notificarSolicitacaoRegistrada(): void {
  totalRegistradas += 1
  window.dispatchEvent(new Event(EVENTO_SOLICITACAO))
}

export function useSolicitacoesRegistradas(): number {
  return useSyncExternalStore(
    subscribe,
    () => totalRegistradas,
    () => 0
  )
}
