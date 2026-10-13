import type { Metadata } from "next"
import { VereadorPerfil } from "@/components/VereadorPerfil"
import { listarParaBuild } from "@/services/api"

interface PageProps {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: "Vereador | Câmara Municipal de Piancó",
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const vereadores = await listarParaBuild("vereadores")
  const parametros = vereadores.map((vereador) => ({ id: String(vereador.id) }))
  return parametros.length > 0 ? parametros : [{ id: "0" }]
}

export default async function VereadorPorCaminho({ params }: PageProps) {
  const { id } = await params
  return <VereadorPerfil id={id} />
}
