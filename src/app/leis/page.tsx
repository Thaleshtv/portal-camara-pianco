import type { Metadata } from "next"
import { NormasLista } from "@/components/NormasLista"

export const metadata: Metadata = {
  title: "Leis | Câmara Municipal de Piancó",
}

export default function Leis() {
  return <NormasLista colecao="leis" titulo="Leis municipais" mensagemVazio="Nenhuma lei encontrada." />
}
