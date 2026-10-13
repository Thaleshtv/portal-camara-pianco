"use client"

import { useCallback, useMemo, useState } from "react"
import { normalizarTexto } from "@/lib/formato"

export interface CampoFiltro<T> {
  nome: string
  label: string
  tipo: "texto" | "selecao"
  placeholder?: string
  largura?: "normal" | "dupla" | "total"
  obterValor: (item: T) => string
}

export interface ConfiguracaoFiltros<T> {
  obterData: (item: T) => string
  campos: CampoFiltro<T>[]
}

export type ValoresFiltro = Record<string, string>

export interface ControleFiltros<T> {
  valores: ValoresFiltro
  filtrados: T[]
  alterar: (nome: string, valor: string) => void
  pesquisar: () => void
  limpar: () => void
}

const SEM_FILTROS: ValoresFiltro = {}

function atende<T>(item: T, configuracao: ConfiguracaoFiltros<T>, valores: ValoresFiltro): boolean {
  const data = configuracao.obterData(item)
  const exercicio = (valores.exercicio ?? "").trim()
  if (valores.inicio && data < valores.inicio) return false
  if (valores.fim && data > valores.fim) return false
  if (exercicio && !data.startsWith(exercicio)) return false
  return configuracao.campos.every((campo) => {
    const esperado = normalizarTexto(valores[campo.nome] ?? "")
    if (!esperado) return true
    const atual = normalizarTexto(campo.obterValor(item))
    return campo.tipo === "selecao" ? atual === esperado : atual.includes(esperado)
  })
}

export function useFiltros<T>(itens: T[], configuracao: ConfiguracaoFiltros<T>): ControleFiltros<T> {
  const [valores, setValores] = useState<ValoresFiltro>(SEM_FILTROS)
  const [aplicados, setAplicados] = useState<ValoresFiltro>(SEM_FILTROS)

  const filtrados = useMemo(
    () => itens.filter((item) => atende(item, configuracao, aplicados)),
    [itens, configuracao, aplicados]
  )

  const alterar = useCallback((nome: string, valor: string) => {
    setValores((anteriores) => ({ ...anteriores, [nome]: valor }))
  }, [])

  const pesquisar = useCallback(() => setAplicados(valores), [valores])

  const limpar = useCallback(() => {
    setValores(SEM_FILTROS)
    setAplicados(SEM_FILTROS)
  }, [])

  return { valores, filtrados, alterar, pesquisar, limpar }
}
