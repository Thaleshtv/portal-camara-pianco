import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import { BsChevronDown } from "react-icons/bs"
import { PageCard } from "@/components/PageCard"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Câmara Municipal de Piancó",
}

interface Pergunta {
  pergunta: string
  resposta: ReactNode
}

const linkClassName = "text-blue-primary hover:underline"

const perguntas: Pergunta[] = [
  {
    pergunta: "Como solicito uma informação à Câmara?",
    resposta: (
      <>
        Pelo <Link href="/esic" className={linkClassName}>E-SIC</Link>, por e-mail ({SITE.email}) ou presencialmente na
        sede da Câmara. A resposta é dada em até 20 dias, prorrogáveis por mais 10.
      </>
    ),
  },
  {
    pergunta: "Como faço uma reclamação, denúncia, sugestão ou elogio?",
    resposta: (
      <>
        Pela <Link href="/ouvidoria" className={linkClassName}>Ouvidoria</Link>. A identidade do manifestante é preservada.
      </>
    ),
  },
  {
    pergunta: "Posso assistir às sessões da Câmara?",
    resposta: (
      <>
        Sim. As sessões são abertas ao público e transmitidas ao vivo no YouTube. Veja a página de{" "}
        <Link href="/sessoes" className={linkClassName}>Sessões</Link>.
      </>
    ),
  },
  {
    pergunta: "Onde encontro as leis municipais?",
    resposta: (
      <>
        Na página de <Link href="/leis" className={linkClassName}>Leis Municipais</Link>, que também reúne a Lei Orgânica. O{" "}
        <Link href="/regimento-interno" className={linkClassName}>Regimento Interno</Link> tem página própria.
      </>
    ),
  },
  {
    pergunta: "Onde consulto as licitações e contratos da Câmara?",
    resposta: (
      <>
        Em <Link href="/licitacoes" className={linkClassName}>Licitações</Link> e no{" "}
        <Link href="/acessoainformacao" className={linkClassName}>Portal da Transparência</Link>.
      </>
    ),
  },
  {
    pergunta: "Como entro em contato com um vereador?",
    resposta: (
      <>
        Os contatos de cada vereador estão disponíveis na{" "}
        <Link href="/vereadores" className={linkClassName}>Galeria de Vereadores</Link>.
      </>
    ),
  },
  {
    pergunta: "Qual o horário de atendimento da Câmara?",
    resposta: <>{SITE.horario}, no endereço {SITE.endereco}.</>,
  },
]

export default function Faq() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <PageCard title="Perguntas Frequentes (FAQ)">
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
            {perguntas.map((item) => (
              <details key={item.pergunta} className="group">
                <summary className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer list-none font-medium text-text-primary hover:text-blue-primary">
                  {item.pergunta}
                  <BsChevronDown size={14} className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-text-primary/80">{item.resposta}</p>
              </details>
            ))}
          </div>
        </PageCard>
      </div>
    </section>
  )
}
