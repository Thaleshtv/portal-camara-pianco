export function baixarArquivo(nomeArquivo: string, conteudo: string, tipoConteudo: string): void {
  const url = URL.createObjectURL(new Blob([conteudo], { type: tipoConteudo }))
  const link = document.createElement("a")
  link.href = url
  link.download = nomeArquivo
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
