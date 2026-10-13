import type { Vereador } from "@/types/api"

const CARGOS_MESA_DIRETORA = ["Presidente", "Vice Presidente", "1º Secretário", "2º Secretário"]

export function getMesaDiretora(vereadores: Vereador[]): Vereador[] {
  return vereadores
    .filter((vereador) => CARGOS_MESA_DIRETORA.includes(vereador.role))
    .sort((a, b) => CARGOS_MESA_DIRETORA.indexOf(a.role) - CARGOS_MESA_DIRETORA.indexOf(b.role))
}

export function ordenarPorNome(vereadores: Vereador[]): Vereador[] {
  return [...vereadores].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
}
