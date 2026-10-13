import type { Metadata } from "next"
import { PageCard } from "@/components/PageCard"
import { InfoList } from "@/components/InfoList"
import { EstruturaParlamentar } from "@/components/EstruturaParlamentar"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Estrutura Organizacional | Câmara Municipal de Piancó",
}

export default function EstruturaOrganizacional() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Estrutura Organizacional">
          <InfoList
            items={[
              { label: "Órgão", value: SITE.nome },
              { label: "Endereço", value: SITE.endereco },
              { label: "E-mail", value: SITE.email },
              { label: "Telefone", value: SITE.telefone },
              { label: "Horário de atendimento", value: SITE.horario },
            ]}
          />
        </PageCard>

        <EstruturaParlamentar />
      </div>
    </section>
  )
}
