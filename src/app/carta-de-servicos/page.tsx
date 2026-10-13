import type { Metadata } from "next"
import Link from "next/link"
import { PageCard } from "@/components/PageCard"
import { InfoList } from "@/components/InfoList"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Carta de Serviços | Câmara Municipal de Piancó",
}

interface Servico {
  titulo: string
  descricao: string
  comoAcessar: string
  prazo: string
  href: string
}

const servicos: Servico[] = [
  {
    titulo: "Pedido de acesso à informação (E-SIC)",
    descricao: "Solicitação de informações públicas da Câmara Municipal, nos termos da Lei nº 12.527/2011.",
    comoAcessar: "Pelo formulário do E-SIC neste portal, por e-mail ou presencialmente na sede da Câmara.",
    prazo: "Até 20 dias, prorrogáveis por mais 10 dias.",
    href: "/esic",
  },
  {
    titulo: "Ouvidoria",
    descricao: "Registro de reclamações, denúncias, sugestões, elogios e solicitações.",
    comoAcessar: "Pelo formulário da Ouvidoria neste portal, por e-mail ou presencialmente na sede da Câmara.",
    prazo: "Até 30 dias, prorrogáveis por igual período.",
    href: "/ouvidoria",
  },
  {
    titulo: "Acompanhamento das sessões",
    descricao: "Acompanhamento das sessões plenárias, presencialmente ou pela transmissão ao vivo.",
    comoAcessar: "Na sede da Câmara ou pelo canal oficial no YouTube.",
    prazo: "Conforme o calendário de sessões.",
    href: "/sessoes",
  },
  {
    titulo: "Consulta à legislação municipal",
    descricao: "Consulta às leis municipais, Lei Orgânica e Regimento Interno.",
    comoAcessar: "Neste portal, sem necessidade de cadastro.",
    prazo: "Acesso imediato.",
    href: "/leis",
  },
  {
    titulo: "Diário Oficial do Poder Legislativo",
    descricao: "Consulta às edições do Diário Oficial do Poder Legislativo.",
    comoAcessar: "Neste portal, sem necessidade de cadastro.",
    prazo: "Acesso imediato.",
    href: "/diario-oficial",
  },
  {
    titulo: "Licitações e contratos",
    descricao: "Consulta a editais, dispensas, inexigibilidades e documentos de contratações.",
    comoAcessar: "Neste portal, sem necessidade de cadastro.",
    prazo: "Acesso imediato.",
    href: "/licitacoes",
  },
  {
    titulo: "Protocolo de documentos",
    descricao: "Entrega de requerimentos, ofícios e demais documentos endereçados à Câmara Municipal.",
    comoAcessar: "Presencialmente na sede da Câmara, no horário de atendimento.",
    prazo: "Conforme a natureza do documento.",
    href: "/contatos",
  },
]

export default function CartaDeServicos() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Carta de Serviços ao Usuário">
          <p className="text-[15px] leading-relaxed text-text-primary text-justify mb-4">
            Esta Carta de Serviços informa os serviços prestados pela Câmara Municipal de Piancó, as formas de acesso e os
            prazos de atendimento, conforme a Lei nº 13.460/2017.
          </p>
          <InfoList
            items={[
              { label: "Endereço", value: SITE.endereco },
              { label: "E-mail", value: SITE.email },
              { label: "Telefone", value: SITE.telefone },
              { label: "Horário de atendimento", value: SITE.horario },
            ]}
          />
        </PageCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicos.map((servico) => (
            <div key={servico.titulo} className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
              <h4 className="text-lg font-semibold text-text-primary mb-2">{servico.titulo}</h4>
              <p className="text-sm text-text-primary/80 mb-4">{servico.descricao}</p>
              <div className="flex-1">
                <InfoList
                  items={[
                    { label: "Como acessar", value: servico.comoAcessar },
                    { label: "Prazo", value: servico.prazo },
                  ]}
                />
              </div>
              <Link href={servico.href} className="text-blue-primary font-bold text-xs hover:underline mt-4">
                Acessar serviço
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
