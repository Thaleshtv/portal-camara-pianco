const FUSO_HORARIO = "America/Fortaleza"

export function formatarData(data: string | null | undefined): string {
  const partes = /^(\d{4})-(\d{2})-(\d{2})/.exec(data ?? "")
  if (!partes) {
    return data ?? ""
  }
  return `${partes[3]}/${partes[2]}/${partes[1]}`
}

export function formatarDataHora(instante: string | null | undefined): string {
  if (!instante) {
    return ""
  }
  const momento = new Date(instante)
  if (Number.isNaN(momento.getTime())) {
    return instante
  }
  const data = new Intl.DateTimeFormat("pt-BR", { timeZone: FUSO_HORARIO, dateStyle: "short" }).format(momento)
  const hora = new Intl.DateTimeFormat("pt-BR", { timeZone: FUSO_HORARIO, timeStyle: "medium" }).format(momento)
  return `${data} - ${hora}`
}

export function normalizarTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
}

export function maiorAtualizacao(registros: { atualizadoEm: string }[]): string | null {
  return registros.reduce<string | null>(
    (maior, registro) => (registro.atualizadoEm && (!maior || registro.atualizadoEm > maior) ? registro.atualizadoEm : maior),
    null
  )
}

export function valoresDistintos<T>(itens: T[], obterValor: (item: T) => string): string[] {
  return Array.from(new Set(itens.map(obterValor).filter(Boolean))).sort((a, b) => a.localeCompare(b, "pt-BR"))
}
