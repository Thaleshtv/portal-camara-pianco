export interface Comissao {
  id: number
  name: string
  tipo: string
  membros: string[]
}

const comissoes: Comissao[] = [
  {
    id: 9,
    name: "Comissão de Educação, Cultura, Saúde e Defesa do Menor",
    tipo: "Permanente",
    membros: ["/imagens/39.jpg", "/imagens/41.jpg", "/imagens/42.jpg"],
  },
  {
    id: 10,
    name: "Comissão de Estudos da Seca e do Meio Ambiente",
    tipo: "Permanente",
    membros: ["/imagens/6.jpg", "/imagens/20.jpg", "/imagens/3.jpg"],
  },
  {
    id: 8,
    name: "Comissão de Fiscalização e Controle da Execução Orçamentária",
    tipo: "Permanente",
    membros: ["/imagens/2.jpg", "/imagens/43.jpg", "/imagens/40.jpg"],
  },
  {
    id: 7,
    name: "Comissão de Organização, Legislação e Justiça",
    tipo: "Permanente",
    membros: ["/imagens/25.jpg", "/imagens/20.jpg", "/imagens/42.jpg"],
  },
]

export function getComissoes(): Comissao[] {
  return comissoes
}

export function getComissaoById(id: number): Comissao | undefined {
  return comissoes.find((c) => c.id === id)
}
