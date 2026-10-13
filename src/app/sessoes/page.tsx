import type { Metadata } from "next"
import Link from "next/link"
import { BsYoutube, BsFileTextFill } from "react-icons/bs"
import { PageCard } from "@/components/PageCard"
import { SessoesTabelas } from "@/components/SessoesTabelas"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Sessões | Câmara Municipal de Piancó",
}

const atas = [
  { href: "/documentos?tipo=atas-sessoes-ordinarias", label: "Atas das Sessões Ordinárias" },
  { href: "/documentos?tipo=atas-sessoes-extraordinarias", label: "Atas das Sessões Extraordinárias" },
]

export default function Sessoes() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Sessões ao vivo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[15px] leading-relaxed text-text-primary">
              As sessões da Câmara Municipal de Piancó são transmitidas ao vivo no canal oficial do YouTube.
            </p>
            <a
              href={SITE.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors shrink-0"
            >
              <BsYoutube size={16} /> Assistir no YouTube
            </a>
          </div>
        </PageCard>

        <SessoesTabelas />

        <PageCard id="atas" title="Atas de Sessões">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {atas.map((ata) => (
              <Link
                key={ata.href}
                href={ata.href}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 text-text-primary hover:shadow-md hover:text-blue-primary transition-all"
              >
                <BsFileTextFill className="text-blue-primary" size={20} />
                <span className="font-medium text-sm">{ata.label}</span>
              </Link>
            ))}
          </div>
        </PageCard>
      </div>
    </section>
  )
}
