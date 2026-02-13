import { notFound } from "next/navigation"
import Link from "next/link"
import { BsCalendarFill, BsArrowLeft, BsTagFill } from "react-icons/bs"
import { noticias } from "@/data/noticias"

interface PageProps {
  params: Promise<{ id: string; slug: string }>
}

export default async function NoticiaDetalhe({ params }: PageProps) {
  const { id } = await params
  const noticia = noticias.find((n) => n.id === Number(id))

  if (!noticia) {
    notFound()
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Voltar */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-primary hover:underline text-sm mb-6"
          >
            <BsArrowLeft size={14} />
            Voltar para a página inicial
          </Link>

          {/* Card */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Imagem */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={noticia.image}
              alt={noticia.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />

            {/* Conteúdo */}
            <div className="p-6 md:p-10">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-primary/60">
                <span className="inline-flex items-center gap-1">
                  <BsTagFill size={12} />
                  {noticia.tag}
                </span>
                <span className="inline-flex items-center gap-1">
                  <BsCalendarFill size={12} />
                  {noticia.date}
                </span>
              </div>

              {/* Título */}
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                {noticia.title}
              </h1>

              {/* Descrição */}
              <p className="text-text-primary/70 text-base mb-8 italic border-l-4 border-blue-primary pl-4">
                {noticia.description}
              </p>

              {/* Conteúdo */}
              <div className="prose prose-sm max-w-none text-text-primary/80 leading-relaxed">
                {noticia.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
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
