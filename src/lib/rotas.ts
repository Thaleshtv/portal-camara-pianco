export function rotaNoticia(id: number | string): string {
  return `/informa/noticia?id=${encodeURIComponent(String(id))}`
}

export function rotaLicitacao(slug: string): string {
  return `/licitacoes/detalhe?slug=${encodeURIComponent(slug)}`
}

export function rotaVereador(id: number | string): string {
  return `/vereadores/perfil?id=${encodeURIComponent(String(id))}`
}
