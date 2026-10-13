import type { Metadata } from "next"
import { NoticiasGrid } from "@/components/NoticiasGrid"

export const metadata: Metadata = {
  title: "Notícias | Câmara Municipal de Piancó",
}

export default function Informa() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-text-primary mb-10">Todas as notícias</h2>
        <NoticiasGrid />
      </div>
    </section>
  )
}
