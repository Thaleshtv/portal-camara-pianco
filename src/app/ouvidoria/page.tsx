import type { Metadata } from "next"
import { PageCard } from "@/components/PageCard"
import { InfoList } from "@/components/InfoList"
import { SolicitacaoForm } from "@/components/SolicitacaoForm"
import { ConsultaProtocolo } from "@/components/ConsultaProtocolo"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Ouvidoria | Câmara Municipal de Piancó",
}

const manifestacoes = [
  { tipo: "Reclamação", descricao: "Insatisfação com um serviço ou com o atendimento prestado." },
  { tipo: "Denúncia", descricao: "Comunicação de irregularidade ou ato ilícito que exija apuração." },
  { tipo: "Sugestão", descricao: "Proposta de melhoria dos serviços prestados pela Câmara." },
  { tipo: "Elogio", descricao: "Reconhecimento ou satisfação com um serviço ou atendimento." },
  { tipo: "Solicitação", descricao: "Pedido de providência ou de atendimento." },
]

export default function Ouvidoria() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Ouvidoria">
          <div className="space-y-4 text-[15px] leading-relaxed text-text-primary text-justify">
            <p>
              A Ouvidoria é o canal de comunicação entre o cidadão e a Câmara Municipal de Piancó para o registro de
              manifestações sobre os serviços prestados, nos termos da Lei nº 13.460/2017.
            </p>
            <p>
              As manifestações são respondidas em até <strong>30 dias</strong>, prorrogáveis por igual período mediante
              justificativa. A identidade do manifestante é preservada.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {manifestacoes.map((item) => (
              <div key={item.tipo} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-primary mb-1">{item.tipo}</h4>
                <p className="text-xs text-text-primary/70">{item.descricao}</p>
              </div>
            ))}
          </div>
        </PageCard>

        <PageCard title="Atendimento presencial e por telefone">
          <InfoList
            items={[
              { label: "Endereço", value: SITE.endereco },
              { label: "E-mail", value: SITE.email },
              { label: "Telefone", value: SITE.telefone },
              { label: "Horário de atendimento", value: SITE.horario },
            ]}
          />
        </PageCard>

        <PageCard title="Registrar manifestação">
          <SolicitacaoForm canal="ouvidoria" />
        </PageCard>

        <PageCard id="consulta" title="Consultar protocolo">
          <ConsultaProtocolo canal="ouvidoria" />
        </PageCard>
      </div>
    </section>
  )
}
