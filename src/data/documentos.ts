import type { TipoDocumento } from "@/types/api"

export const TIPOS_DOCUMENTOS: Record<TipoDocumento, string> = {
  "decretos-legislativos": "Decretos Legislativos",
  "resolucoes": "Resoluções",
  "atos-mesa-diretora": "Atos da Mesa Diretora",
  "atos-presidencia": "Atos da Presidência",
  "portarias-mesa-diretora": "Portarias da Mesa Diretora",
  "portarias-presidencia": "Portarias da Presidência",
  "atas-sessoes-ordinarias": "Atas das Sessões Ordinárias",
  "atas-sessoes-extraordinarias": "Atas das Sessões Extraordinárias",
  "lei-organica-municipal": "Lei Orgânica Municipal",
}

export function ehTipoDocumento(valor: string): valor is TipoDocumento {
  return Object.prototype.hasOwnProperty.call(TIPOS_DOCUMENTOS, valor)
}
