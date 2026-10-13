import { baixarArquivo } from "@/lib/download"

export interface ColunaCsv<T> {
  titulo: string
  valor: (item: T) => string
}

function escapar(valor: string): string {
  return `"${valor.replace(/"/g, '""')}"`
}

export function gerarCsv<T>(colunas: ColunaCsv<T>[], itens: T[]): string {
  const cabecalho = colunas.map((coluna) => escapar(coluna.titulo)).join(";")
  const linhas = itens.map((item) => colunas.map((coluna) => escapar(coluna.valor(item))).join(";"))
  return [cabecalho, ...linhas].join("\r\n")
}

export function baixarCsv<T>(nomeArquivo: string, colunas: ColunaCsv<T>[], itens: T[]): void {
  baixarArquivo(`${nomeArquivo}.csv`, `\uFEFF${gerarCsv(colunas, itens)}`, "text/csv;charset=utf-8")
}
