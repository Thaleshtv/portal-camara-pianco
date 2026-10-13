import type { Metadata } from "next"
import { PageCard } from "@/components/PageCard"
import { InfoList } from "@/components/InfoList"
import { SolicitacaoForm } from "@/components/SolicitacaoForm"
import { ConsultaProtocolo } from "@/components/ConsultaProtocolo"
import { EstatisticasSolicitacoes } from "@/components/EstatisticasSolicitacoes"
import { RelatorioSolicitacoes } from "@/components/RelatorioSolicitacoes"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "E-SIC | Câmara Municipal de Piancó",
}

export default function Esic() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="E-SIC - Serviço de Informação ao Cidadão">
          <div className="space-y-4 text-[15px] leading-relaxed text-text-primary text-justify">
            <p>
              O Serviço de Informação ao Cidadão (SIC) é o canal para qualquer pessoa, física ou jurídica, solicitar informações
              públicas à Câmara Municipal de Piancó, conforme a Lei nº 12.527/2011 (Lei de Acesso à Informação).
            </p>
            <p>
              Não é necessário apresentar os motivos do pedido. A resposta deve ser dada em até <strong>20 dias</strong>,
              prorrogáveis por mais <strong>10 dias</strong> mediante justificativa. Caso o acesso seja negado, o solicitante
              pode apresentar recurso em até 10 dias.
            </p>
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

        <PageCard title="Fazer um pedido de informação">
          <SolicitacaoForm canal="esic" />
        </PageCard>

        <PageCard id="consulta" title="Consultar protocolo">
          <ConsultaProtocolo canal="esic" />
        </PageCard>

        <PageCard id="estatisticas" title="Estatísticas dos pedidos" bodyClassName="">
          <EstatisticasSolicitacoes canal="esic" />
        </PageCard>

        <RelatorioSolicitacoes canal="esic" titulo="Relatório de pedidos de informação" />
      </div>
    </section>
  )
}
