import type { Metadata } from "next"
import { PageCard } from "@/components/PageCard"
import { SITE } from "@/data/site"

export const metadata: Metadata = {
  title: "Política de Privacidade | Câmara Municipal de Piancó",
}

interface Secao {
  titulo: string
  texto: string
}

const secoes: Secao[] = [
  {
    titulo: "1. Sobre esta política",
    texto:
      "Esta Política de Privacidade explica como a Câmara Municipal de Piancó trata os dados pessoais dos usuários deste portal, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).",
  },
  {
    titulo: "2. Dados coletados",
    texto:
      "Este portal não exige cadastro para consulta às informações públicas. Dados pessoais como nome, e-mail e telefone são tratados apenas quando informados voluntariamente pelo usuário em pedidos de acesso à informação (E-SIC) e manifestações de Ouvidoria.",
  },
  {
    titulo: "3. Finalidade do tratamento",
    texto:
      "Os dados informados são utilizados exclusivamente para responder às solicitações e manifestações, no cumprimento das obrigações legais da Câmara Municipal, e não são compartilhados com terceiros para fins comerciais.",
  },
  {
    titulo: "4. Cookies e armazenamento local",
    texto:
      "O portal armazena no seu navegador apenas preferências de uso, como o tamanho do texto, o modo de alto contraste e a sua escolha sobre o aviso de cookies. Essas informações não identificam o usuário e podem ser apagadas a qualquer momento nas configurações do navegador.",
  },
  {
    titulo: "5. Conteúdo de terceiros",
    texto:
      "Algumas páginas exibem conteúdo de serviços externos, como o Portal da Transparência, o Google Maps e o YouTube, que possuem políticas de privacidade próprias.",
  },
  {
    titulo: "6. Direitos do titular",
    texto:
      "O titular pode solicitar confirmação da existência de tratamento, acesso, correção ou eliminação de seus dados pessoais, nos termos do art. 18 da LGPD.",
  },
]

export default function PoliticaDePrivacidade() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <PageCard title="Política de Privacidade">
          <div className="space-y-6">
            {secoes.map((secao) => (
              <div key={secao.titulo}>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{secao.titulo}</h4>
                <p className="text-justify text-[15px] leading-relaxed text-text-primary">{secao.texto}</p>
              </div>
            ))}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">7. Contato</h4>
              <p className="text-justify text-[15px] leading-relaxed text-text-primary">
                Dúvidas sobre esta política podem ser enviadas para {SITE.email} ou apresentadas presencialmente em{" "}
                {SITE.endereco}.
              </p>
            </div>
          </div>
        </PageCard>
      </div>
    </section>
  )
}
