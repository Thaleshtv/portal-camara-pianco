"use client"

import { useEffect, useState } from "react"
import { ErroApi, caminhoColecao, requisitar } from "@/services/api"
import type { Colecoes, FiltrosColecao, NomeColecao } from "@/types/api"

export interface EstadoRemoto<T> {
  dados: T | null
  carregando: boolean
  erro: ErroApi | null
}

interface Resultado<T> {
  chave: string
  dados: T | null
  erro: ErroApi | null
}

function paraErroApi(erro: unknown): ErroApi {
  return erro instanceof ErroApi ? erro : new ErroApi(0, "Erro inesperado ao carregar os dados")
}

export function useApi<T>(caminho: string | null, versao = 0): EstadoRemoto<T> {
  const [resultado, setResultado] = useState<Resultado<T> | null>(null)
  const chave = `${versao}:${caminho ?? ""}`

  useEffect(() => {
    if (caminho === null) {
      return
    }
    let ativo = true
    requisitar<T>(caminho)
      .then((dados) => {
        if (ativo) {
          setResultado({ chave, dados, erro: null })
        }
      })
      .catch((erro: unknown) => {
        if (ativo) {
          setResultado({ chave, dados: null, erro: paraErroApi(erro) })
        }
      })
    return () => {
      ativo = false
    }
  }, [caminho, chave])

  if (caminho === null) {
    return { dados: null, carregando: false, erro: null }
  }
  if (!resultado || resultado.chave !== chave) {
    return { dados: null, carregando: true, erro: null }
  }
  return { dados: resultado.dados, carregando: false, erro: resultado.erro }
}

const LISTA_VAZIA: never[] = []

export interface EstadoLista<T> {
  itens: T[]
  carregando: boolean
  erro: ErroApi | null
}

export function useColecao<K extends NomeColecao>(colecao: K, filtros?: FiltrosColecao): EstadoLista<Colecoes[K]> {
  const { dados, carregando, erro } = useApi<Colecoes[K][]>(caminhoColecao(colecao, filtros))
  return { itens: Array.isArray(dados) ? dados : LISTA_VAZIA, carregando, erro }
}
