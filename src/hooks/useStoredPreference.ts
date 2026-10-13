"use client"

import { useCallback, useSyncExternalStore } from "react"

const EVENTO_PREFERENCIA = "preferencia-alterada"
const preferenciasEmMemoria = new Map<string, string>()

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback)
  window.addEventListener(EVENTO_PREFERENCIA, callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(EVENTO_PREFERENCIA, callback)
  }
}

function lerPreferencia(chave: string): string | null {
  try {
    return window.localStorage.getItem(chave) ?? preferenciasEmMemoria.get(chave) ?? null
  } catch {
    return preferenciasEmMemoria.get(chave) ?? null
  }
}

export function useStoredPreference(chave: string, valorNoServidor: string | null = null) {
  const valor = useSyncExternalStore(
    subscribe,
    () => lerPreferencia(chave),
    () => valorNoServidor
  )

  const salvar = useCallback(
    (novoValor: string) => {
      preferenciasEmMemoria.set(chave, novoValor)
      try {
        window.localStorage.setItem(chave, novoValor)
      } catch {
        preferenciasEmMemoria.set(chave, novoValor)
      }
      window.dispatchEvent(new Event(EVENTO_PREFERENCIA))
    },
    [chave]
  )

  return [valor, salvar] as const
}
