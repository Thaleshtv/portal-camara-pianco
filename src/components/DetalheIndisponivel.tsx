import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { EmptyState } from "@/components/EmptyState"
import { ErrorState } from "@/components/ErrorState"
import { LoadingState } from "@/components/LoadingState"

interface DetalheIndisponivelProps {
  carregando: boolean
  naoEncontrado: boolean
  mensagemNaoEncontrado: string
  voltarHref: string
  voltarLabel: string
}

export function DetalheIndisponivel({ carregando, naoEncontrado, mensagemNaoEncontrado, voltarHref, voltarLabel }: DetalheIndisponivelProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Link href={voltarHref} className="inline-flex items-center gap-2 text-blue-primary hover:underline text-sm mb-6">
          <BsArrowLeft size={14} />
          {voltarLabel}
        </Link>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {carregando && <LoadingState />}
          {!carregando && naoEncontrado && <EmptyState message={mensagemNaoEncontrado} />}
          {!carregando && !naoEncontrado && <ErrorState />}
        </div>
      </div>
    </section>
  )
}
