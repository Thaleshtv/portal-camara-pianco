export interface LicitacaoArquivo {
  nome: string
  url: string
}

export interface Licitacao {
  id: number
  slug: string
  numero: string
  modalidade: string
  objeto: string
  objetoCompleto: string
  unidadeGestora: string
  cnpj: string
  dataPublicacao: string
  dataRealizacao: string
  participante: string
  cnpjParticipante: string
  valorProposta: string
  status: string
  arquivos: LicitacaoArquivo[]
}

const UNIDADE_GESTORA = "Câmara Municipal de Piancó-PB"
const CNPJ = "08.560.781/0001-80"
const MODALIDADE = "Dispensa (Lei Nº. 14.133/2021)"

export const licitacoes: Licitacao[] = [
  {
    id: 1,
    slug: "dispensa-de-licitacao-no-00001-2026",
    numero: "00001/2026",
    modalidade: MODALIDADE,
    objeto: "Locação de veículo",
    objetoCompleto:
      "Contratação de empresa para prestar serviços de locação de um veículo para servir a Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "12/02/2026",
    dataRealizacao: "16/02/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00001-2026 - Locação",
        url: "/documents/AVISO DE DISPENSA 00001-2026 LOCAÇÃO.pdf",
      },
      {
        nome: "Edital Dispensa 00001-2026 - Locação",
        url: "/documents/EDITAL DISPENSA 00001-2026 LOCAÇÃO.pdf",
      },
    ],
  },
  {
    id: 2,
    slug: "dispensa-de-licitacao-no-00002-2026",
    numero: "00002/2026",
    modalidade: MODALIDADE,
    objeto: "Aquisição de combustível",
    objetoCompleto:
      "Aquisição de gasolina comum para abastecimento do veículo a disposição da Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "12/02/2026",
    dataRealizacao: "14/02/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00002-2026 - Combustível",
        url: "/documents/AVISO DE DISPENSA 00002-2026 COMBUSTIVEL(1).pdf",
      },
      {
        nome: "Edital Dispensa 00002-2026 - Combustível",
        url: "/documents/EDITAL DISPENSA 00002-2026 COMBUSTIVEL.pdf",
      },
    ],
  },
  {
    id: 3,
    slug: "dispensa-de-licitacao-no-00003-2026",
    numero: "00003/2026",
    modalidade: MODALIDADE,
    objeto: "Sistema legislativo e votação eletrônica",
    objetoCompleto:
      "Contratação de empresa para prestar serviços de locação de sistema para gerenciamento das atividades, tramitação e consulta de proposição legislativa, bem como votação eletrônica da Câmara Municipal de Piancó/PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "06/03/2026",
    dataRealizacao: "11/03/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00003-2026 - Sistema Legislativo",
        url: "/documents/AVISO DE DISPENSA 00003-2026 PAINEL DE VOTAÇÃO.pdf",
      },
      {
        nome: "Edital Dispensa 00003-2026 - Sistema Legislativo",
        url: "/documents/EDITAL DISPENSA 00003-2026 PAINEL DE VOTAÇÃO.pdf",
      },
    ],
  },
]

export function getLicitacaoBySlug(slug: string): Licitacao | undefined {
  return licitacoes.find((l) => l.slug === slug)
}

export function getEditalArquivo(licitacao: Licitacao): LicitacaoArquivo | undefined {
  return licitacao.arquivos.find((a) => a.nome.toLowerCase().startsWith("edital"))
}
