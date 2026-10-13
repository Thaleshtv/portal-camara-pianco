import type { Metadata } from "next"
import { LegislaturaTabela } from "@/components/LegislaturaTabela"
import { PageCard } from "@/components/PageCard"

export const metadata: Metadata = {
  title: "Legislatura | Câmara Municipal de Piancó",
}

export default function Legislatura() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <PageCard title="Legislatura 2025/2028" bodyClassName="">
          <LegislaturaTabela />
        </PageCard>
      </div>
    </section>
  )
}
