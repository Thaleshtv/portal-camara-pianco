"use client"

import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { NoticiaCard } from "@/components/NoticiaCard"
import { useColecao } from "@/hooks/useApi"

interface NoticiasGridProps {
  limite?: number
}

export function NoticiasGrid({ limite }: NoticiasGridProps) {
  const { itens, carregando, erro } = useColecao("noticias")
  const noticias = limite ? itens.slice(0, limite) : itens

  return (
    <ConteudoRemoto carregando={carregando} erro={erro} vazio={noticias.length === 0} mensagemVazio="Nenhuma notícia encontrada.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </ConteudoRemoto>
  )
}
