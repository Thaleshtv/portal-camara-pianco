import type { Metadata } from "next"
import Link from "next/link"
import { PageCard } from "@/components/PageCard"
import { menuItems } from "@/data/menu"
import { itensTransparencia } from "@/data/transparencia"
import { paginasUtilitarias } from "@/data/paginasUtilitarias"

export const metadata: Metadata = {
  title: "Mapa do Site | Câmara Municipal de Piancó",
}

interface SecaoMapa {
  titulo: string
  links: { href: string; label: string }[]
}

const secoes: SecaoMapa[] = [
  {
    titulo: "Início",
    links: [
      { href: "/", label: "Página inicial" },
      { href: "/informa", label: "Notícias" },
    ],
  },
  ...menuItems.map((item) => ({
    titulo: item.label,
    links: [...(item.children ?? []), ...(item.subMenu?.children ?? [])].filter((link) => !link.disabled),
  })),
  {
    titulo: "ACESSO À INFORMAÇÃO",
    links: itensTransparencia.map((item) => ({ href: `/transparencia/${item.slug}`, label: item.titulo })),
  },
  { titulo: "UTILIDADES", links: paginasUtilitarias },
]

export default function MapaDoSite() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <PageCard title="Mapa do Site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {secoes.map((secao) => (
              <div key={secao.titulo}>
                <h4 className="font-semibold text-blue-primary mb-3 text-sm">{secao.titulo}</h4>
                <ul className="space-y-2">
                  {secao.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-text-primary hover:text-blue-primary hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PageCard>
      </div>
    </section>
  )
}
