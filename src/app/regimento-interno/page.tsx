import type { Metadata } from "next"
import { NormasLista } from "@/components/NormasLista"

export const metadata: Metadata = {
  title: "Regimento Interno | Câmara Municipal de Piancó",
}

export default function RegimentoInterno() {
  return (
    <NormasLista
      colecao="regimentos"
      titulo="Regimento Interno da Câmara Municipal"
      mensagemVazio="Nenhum regimento encontrado."
    />
  )
}
