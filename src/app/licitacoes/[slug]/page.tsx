import type { Metadata } from "next"
import { LicitacaoDetalhe } from "@/components/LicitacaoDetalhe"
import { listarParaBuild } from "@/services/api"

interface PageProps {
  params: Promise<{ slug: string }>
}

export const metadata: Metadata = {
  title: "Licitação | Câmara Municipal de Piancó",
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const licitacoes = await listarParaBuild("licitacoes")
  const parametros = licitacoes.filter((licitacao) => licitacao.slug).map((licitacao) => ({ slug: licitacao.slug }))
  return parametros.length > 0 ? parametros : [{ slug: "0" }]
}

export default async function LicitacaoPorSlug({ params }: PageProps) {
  const { slug } = await params
  return <LicitacaoDetalhe slug={decodeURIComponent(slug)} />
}
