"use client"

import { useMemo } from "react"
import { montarIndice, type ResultadoBusca } from "@/data/busca"
import { useColecao } from "@/hooks/useApi"

export interface IndiceBusca {
  indice: ResultadoBusca[]
  carregando: boolean
  incompleto: boolean
}

export function useIndiceBusca(): IndiceBusca {
  const noticias = useColecao("noticias")
  const licitacoes = useColecao("licitacoes")
  const diarios = useColecao("diarios")
  const vereadores = useColecao("vereadores")
  const leis = useColecao("leis")
  const regimentos = useColecao("regimentos")
  const documentos = useColecao("documentos")
  const transparencia = useColecao("transparencia")

  const indice = useMemo(
    () =>
      montarIndice({
        noticias: noticias.itens,
        licitacoes: licitacoes.itens,
        diarios: diarios.itens,
        vereadores: vereadores.itens,
        leis: leis.itens,
        regimentos: regimentos.itens,
        documentos: documentos.itens,
        transparencia: transparencia.itens,
      }),
    [
      noticias.itens,
      licitacoes.itens,
      diarios.itens,
      vereadores.itens,
      leis.itens,
      regimentos.itens,
      documentos.itens,
      transparencia.itens,
    ]
  )

  const colecoes = [noticias, licitacoes, diarios, vereadores, leis, regimentos, documentos, transparencia]

  return {
    indice,
    carregando: colecoes.some((colecao) => colecao.carregando),
    incompleto: colecoes.some((colecao) => colecao.erro !== null),
  }
}
