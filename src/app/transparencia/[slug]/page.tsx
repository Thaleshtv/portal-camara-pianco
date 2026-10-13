import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BsArrowLeft } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"
import { PageCard } from "@/components/PageCard"
import { DocumentosTransparencia } from "@/components/DocumentosTransparencia"
import { getItemTransparencia, itensTransparencia } from "@/data/transparencia"
import { SITE } from "@/data/site"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return itensTransparencia.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getItemTransparencia(slug)
  return { title: item ? `${item.titulo} | Câmara Municipal de Piancó` : "Transparência" }
}

export default async function ItemTransparencia({ params }: PageProps) {
  const { slug } = await params
  const item = getItemTransparencia(slug)

  if (!item) {
    notFound()
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <Link href="/acessoainformacao" className="inline-flex items-center gap-2 text-blue-primary hover:underline text-sm">
          <BsArrowLeft size={14} />
          Voltar para Acesso à Informação
        </Link>

        <PageCard
          title={item.titulo}
          action={
            <a
              href={SITE.transparenciaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Consultar no Portal da Transparência
              <FiExternalLink size={14} />
            </a>
          }
        >
          <p className="text-[15px] leading-relaxed text-text-primary">{item.descricao}</p>
        </PageCard>

        <DocumentosTransparencia categoria={item.slug} />
      </div>
    </section>
  )
}
