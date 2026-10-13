import type { Metadata } from "next"
import { PageCard } from "@/components/PageCard"
import { InfoList } from "@/components/InfoList"

export const metadata: Metadata = {
  title: "Acessibilidade | Câmara Municipal de Piancó",
}

export default function Acessibilidade() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Acessibilidade">
          <p className="text-[15px] leading-relaxed text-text-primary text-justify">
            Este portal foi desenvolvido para ser acessível ao maior número possível de pessoas, em atenção à Lei nº
            13.146/2015 (Lei Brasileira de Inclusão) e às recomendações do Modelo de Acessibilidade em Governo Eletrônico
            (eMAG).
          </p>
        </PageCard>

        <PageCard title="Recursos disponíveis">
          <InfoList
            items={[
              { label: "A+ / A-", value: "aumentam ou diminuem o tamanho do texto. Ficam na barra superior do portal." },
              { label: "Contraste", value: "ativa o modo de alto contraste, com fundo escuro e texto claro." },
              { label: "Reset", value: "volta o tamanho do texto e as cores ao padrão." },
              { label: "Ir para o conteúdo", value: "pressione Tab ao abrir a página para pular direto ao conteúdo principal." },
              { label: "Busca", value: "permite encontrar páginas, notícias, licitações e publicações pelo campo de pesquisa." },
            ]}
          />
        </PageCard>

        <PageCard title="Atalhos do navegador">
          <InfoList
            items={[
              { label: "Ctrl + / Ctrl -", value: "aumentam ou diminuem o zoom da página (Cmd no Mac)." },
              { label: "Ctrl + 0", value: "volta o zoom ao padrão." },
              { label: "Tab / Shift + Tab", value: "avançam ou voltam entre links e campos." },
              { label: "Enter", value: "abre o link ou aciona o botão selecionado." },
            ]}
          />
        </PageCard>
      </div>
    </section>
  )
}
