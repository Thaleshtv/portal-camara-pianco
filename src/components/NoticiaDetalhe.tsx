"use client"

import Link from "next/link"
import { BsArrowLeft, BsCalendarFill, BsTagFill } from "react-icons/bs"
import { DetalheIndisponivel } from "@/components/DetalheIndisponivel"
import { useApi } from "@/hooks/useApi"
import { formatarData } from "@/lib/formato"
import { caminhoRegistro } from "@/services/api"
import type { Noticia } from "@/types/api"

interface NoticiaDetalheProps {
  id: string
}

export function NoticiaDetalhe({ id }: NoticiaDetalheProps) {
  const idValido = /^\d+$/.test(id)
  const { dados: noticia, carregando, erro } = useApi<Noticia>(idValido ? caminhoRegistro("noticias", id) : null)

  if (!noticia) {
    return (
      <DetalheIndisponivel
        carregando={carregando}
        naoEncontrado={!idValido || erro?.status === 404}
        mensagemNaoEncontrado="Notícia não encontrada."
        voltarHref="/informa"
        voltarLabel="Voltar para as notícias"
      />
    )
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/informa" className="inline-flex items-center gap-2 text-blue-primary hover:underline text-sm mb-6">
            <BsArrowLeft size={14} />
            Voltar para as notícias
          </Link>

          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {noticia.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={noticia.image} alt={noticia.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />
            )}

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-primary/60">
                {noticia.tag && (
                  <span className="inline-flex items-center gap-1">
                    <BsTagFill size={12} />
                    {noticia.tag}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <BsCalendarFill size={12} />
                  {formatarData(noticia.date)}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">{noticia.title}</h1>

              <p className="text-text-primary/70 text-base mb-8 italic border-l-4 border-blue-primary pl-4">
                {noticia.description}
              </p>

              <div className="prose prose-sm max-w-none text-text-primary/80 leading-relaxed">
                {noticia.content.split(/\n\s*\n/).map((paragrafo, indice) => (
                  <p key={indice} className="mb-4 whitespace-pre-line">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
