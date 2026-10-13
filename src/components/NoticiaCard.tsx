import Link from "next/link"
import { formatarData } from "@/lib/formato"
import { rotaNoticia } from "@/lib/rotas"
import type { Noticia } from "@/types/api"

interface NoticiaCardProps {
  noticia: Noticia
}

export function NoticiaCard({ noticia }: NoticiaCardProps) {
  const href = rotaNoticia(noticia.id)

  return (
    <article className="overflow-hidden">
      {noticia.image && (
        <Link href={href} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={noticia.image} alt={noticia.title} className="w-full h-48 object-cover rounded-lg" />
        </Link>
      )}
      <div className="py-4">
        <span className="text-blue-primary text-sm lowercase">{noticia.tag}</span>
        <Link href={href} className="block">
          <h3 className="text-xl font-bold text-text-primary my-3 leading-tight hover:text-blue-primary transition-colors">
            {noticia.title}
          </h3>
        </Link>
        <p className="text-text-primary/80 text-sm mb-3">{noticia.description}</p>
        <span className="text-sm text-text-primary/60 block mb-3">{formatarData(noticia.date)}</span>
        <Link href={href} className="text-blue-primary font-bold text-xs hover:underline">
          Continue lendo...
        </Link>
      </div>
    </article>
  )
}
