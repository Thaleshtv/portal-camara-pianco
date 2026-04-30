import Link from "next/link"
import { notFound } from "next/navigation"
import {
  BsHouseDoor,
  BsChevronRight,
  BsFileEarmarkPdf,
  BsArrowLeft,
} from "react-icons/bs"
import {
  getEditalArquivo,
  getLicitacaoBySlug,
  licitacoes,
} from "@/data/licitacoes"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return licitacoes.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const licitacao = getLicitacaoBySlug(slug)
  if (!licitacao) return { title: "Licitação não encontrada" }
  return {
    title: `Dispensa de Licitação Nº ${licitacao.numero} | Câmara Municipal de Piancó`,
    description: licitacao.objetoCompleto,
  }
}

export default async function LicitacaoDetalhe({ params }: PageProps) {
  const { slug } = await params
  const licitacao = getLicitacaoBySlug(slug)

  if (!licitacao) {
    notFound()
  }

  const tituloCompleto = `DISPENSA DE LICITAÇÃO Nº ${licitacao.numero}`
  const edital = getEditalArquivo(licitacao)

  const linhas: { label: string; value: string }[] = [
    { label: "Nome da unidade gestora", value: licitacao.unidadeGestora },
    { label: "Código da unidade gestora (CNPJ)", value: licitacao.cnpj },
    { label: "Número da licitação", value: licitacao.numero },
    { label: "Modalidade de licitação", value: licitacao.modalidade },
    { label: "Objeto da licitação", value: licitacao.objetoCompleto },
    { label: "Data de Credenciamento (Publicação)", value: licitacao.dataPublicacao },
    { label: "Data de realização", value: licitacao.dataRealizacao },
    { label: "Nome do Participante", value: licitacao.participante },
    { label: "CNPJ do participante", value: licitacao.cnpjParticipante },
    { label: "Valor da proposta", value: licitacao.valorProposta },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center flex-wrap gap-2 text-sm text-text-primary/70 mb-6"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-blue-primary transition-colors">
            <BsHouseDoor size={14} />
            Início
          </Link>
          <BsChevronRight size={12} />
          <Link href="/licitacoes" className="hover:text-blue-primary transition-colors">
            Licitações
          </Link>
          <BsChevronRight size={12} />
          <span className="text-text-primary font-medium truncate max-w-xs sm:max-w-md">
            {tituloCompleto}
          </span>
        </nav>

        {/* Cabeçalho */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-primary to-blue-primary/80 px-6 py-6 text-white">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-white/20 px-2 py-1 rounded mb-2">
              {licitacao.modalidade}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {tituloCompleto}
            </h1>
            <p className="text-sm text-white/90 mt-2">
              Publicado em {licitacao.dataPublicacao} &bull; {licitacao.unidadeGestora}
            </p>
          </div>
        </div>

        {/* Tabela de Dados */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Dados da Licitação
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {linhas.map((linha, idx) => (
                  <tr
                    key={linha.label}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <th
                      scope="row"
                      className="text-left align-top font-semibold text-text-primary px-6 py-3 w-1/3 border-b border-gray-200"
                    >
                      {linha.label}
                    </th>
                    <td className="align-top text-text-primary px-6 py-3 border-b border-gray-200">
                      {linha.value}
                    </td>
                  </tr>
                ))}
                <tr className={linhas.length % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <th
                    scope="row"
                    className="text-left align-top font-semibold text-text-primary px-6 py-3 w-1/3"
                  >
                    Edital Oficial
                  </th>
                  <td className="align-top text-text-primary px-6 py-3">
                    {edital ? (
                      <a
                        href={edital.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 text-red-700 hover:bg-red-100 text-xs font-semibold px-3 py-2 rounded transition-colors"
                      >
                        <BsFileEarmarkPdf size={14} />
                        Baixar Edital (PDF)
                      </a>
                    ) : (
                      <span className="text-text-primary/60">Indisponível</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Voltar */}
        <div className="flex">
          <Link
            href="/licitacoes"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 text-text-primary hover:bg-gray-100 text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            <BsArrowLeft size={14} /> Voltar para a lista
          </Link>
        </div>
      </div>
    </section>
  )
}
