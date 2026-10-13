import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"
import { BsChevronRight } from "react-icons/bs"
import { PageCard } from "@/components/PageCard"
import { itensTransparencia, linksTransparencia } from "@/data/transparencia"
import { SITE } from "@/data/site"

const linkClassName =
  "flex items-center justify-between gap-2 border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-primary hover:shadow-md hover:text-blue-primary transition-all"

export default function Transparencia() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard
          title="Acesso à Informação"
          action={
            <a
              href={SITE.radarTransparenciaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-primary/90 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Radar da Transparência
              <FiExternalLink size={14} />
            </a>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {linksTransparencia.map((link) => (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.titulo}
                <BsChevronRight size={12} className="shrink-0" />
              </Link>
            ))}
            {itensTransparencia.map((item) => (
              <Link key={item.slug} href={`/transparencia/${item.slug}`} className={linkClassName}>
                {item.titulo}
                <BsChevronRight size={12} className="shrink-0" />
              </Link>
            ))}
          </div>
        </PageCard>

        <PageCard
          title="Portal da Transparência"
          bodyClassName="p-4"
          action={
            <a
              href={SITE.transparenciaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Não consegue visualizar? Clique aqui
              <FiExternalLink size={14} />
            </a>
          }
        >
          <iframe
            src={SITE.transparenciaUrl}
            title="Portal da Transparência - Câmara Municipal de Piancó"
            className="w-full rounded-lg shadow border-0"
            style={{ height: "145vh" }}
            allowFullScreen
          />
          <p className="text-center text-sm text-gray-500 mt-3">
            Para melhor visualização, acesse via desktop ou notebook.
          </p>
        </PageCard>
      </div>
    </section>
  )
}
