import type { Metadata } from "next"
import { NoticiaDetalhe } from "@/components/NoticiaDetalhe"
import { listarParaBuild } from "@/services/api"

interface PageProps {
  params: Promise<{ id: string; slug: string }>
}

export const metadata: Metadata = {
  title: "Notícia | Câmara Municipal de Piancó",
}

export async function generateStaticParams(): Promise<{ id: string; slug: string }[]> {
  const noticias = await listarParaBuild("noticias")
  const parametros = noticias.map((noticia) => ({ id: String(noticia.id), slug: noticia.slug || "noticia" }))
  return parametros.length > 0 ? parametros : [{ id: "0", slug: "noticia" }]
}

export default async function NoticiaPorCaminho({ params }: PageProps) {
  const { id } = await params
  return <NoticiaDetalhe id={id} />
}
