import type { Licitacao, LicitacaoArquivo } from "@/types/api"

export function tituloLicitacao(licitacao: Licitacao): string {
  return `${licitacao.modalidade} Nº ${licitacao.numero}`
}

export function getEditalArquivo(licitacao: Licitacao): LicitacaoArquivo | undefined {
  return licitacao.arquivos.find((arquivo) => arquivo.nome.toLowerCase().startsWith("edital"))
}
