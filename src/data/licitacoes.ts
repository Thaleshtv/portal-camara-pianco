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
  {
    id: 4,
    slug: "dispensa-de-licitacao-no-00004-2026",
    numero: "00004/2026",
    modalidade: MODALIDADE,
    objeto: "Organização e arquivamento de documentos",
    objetoCompleto:
      "Contratação de empresa especializada para a execução de serviços técnicos na seleção, classificação, catalogação, organização, arquivamento e identificação de documentos gerados pela Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "16/03/2026",
    dataRealizacao: "19/03/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00004-2026 - Organização de Documentos",
        url: "/documents/AVISO DE DISPENSA 00004-2026 ORGANIZAÇÃO.pdf",
      },
      {
        nome: "Edital Dispensa 00004-2026 - Organização de Documentos",
        url: "/documents/EDITAL DISPENSA 00004-2026 ORGANIZAÇÃO.pdf",
      },
    ],
  },
  {
    id: 5,
    slug: "dispensa-de-licitacao-no-00005-2026",
    numero: "00005/2026",
    modalidade: MODALIDADE,
    objeto: "Digitalização de documentos",
    objetoCompleto:
      "Contratação de empresa especializada para a execução de serviços técnicos de classificação, indexação e digitalização de documentos gerados pela Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "16/03/2026",
    dataRealizacao: "19/03/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00005-2026 - Digitalização de Documentos",
        url: "/documents/AVISO DE DISPENSA 00005-2026 DIGITALIZAÇÃO.pdf",
      },
      {
        nome: "Edital Dispensa 00005-2026 - Digitalização de Documentos",
        url: "/documents/EDITAL DISPENSA 00005-2026 DIGITALIZAÇÃO.pdf",
      },
    ],
  },
  {
    id: 6,
    slug: "dispensa-de-licitacao-no-00006-2026",
    numero: "00006/2026",
    modalidade: MODALIDADE,
    objeto: "Ponto eletrônico",
    objetoCompleto:
      "Contratação de pessoa jurídica para prestar serviços técnicos de coleta de ponto eletrônico e emissão de relatório da Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "13/04/2026",
    dataRealizacao: "16/04/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00006-2026 - Ponto Eletrônico",
        url: "/documents/AVISO DE DISPENSA 00006-2026 PONTO ELETRONICO.pdf",
      },
      {
        nome: "Edital Dispensa 00006-2026 - Ponto Eletrônico",
        url: "/documents/EDITAL DISPENSA 00006-2026 PONTO ELETRONICO.pdf",
      },
    ],
  },
  {
    id: 7,
    slug: "dispensa-de-licitacao-no-00007-2026",
    numero: "00007/2026",
    modalidade: MODALIDADE,
    objeto: "Fornecimento de coffee break",
    objetoCompleto:
      "Contratação de empresa especializada para prestar os serviços de fornecimento de coffee break a serem servidos em reuniões, confraternizações e eventos promovidos pela Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "16/06/2026",
    dataRealizacao: "19/06/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00007-2026 - Coffee Break",
        url: "/documents/AVISO DE DISPENSA 00007-2026 COFFEE BREAK.pdf",
      },
      {
        nome: "Edital Dispensa 00007-2026 - Coffee Break",
        url: "/documents/EDITAL DISPENSA 00007-2026 COFFEE BREAK.pdf",
      },
    ],
  },
  {
    id: 8,
    slug: "dispensa-de-licitacao-no-00008-2026",
    numero: "00008/2026",
    modalidade: MODALIDADE,
    objeto: "TV Câmara e comunicação institucional",
    objetoCompleto:
      "Contratação de empresa especializada para prestação de serviços técnicos continuados de comunicação institucional, incluindo a implantação, operação e manutenção da TV Câmara, transmissão ao vivo das sessões legislativas e da Escola do Poder Legislativo, locação, instalação e manutenção de equipamentos audiovisuais, gerenciamento de plataformas digitais oficiais, bem como suporte técnico contínuo aos sistemas e infraestrutura utilizados pelo Poder Legislativo Municipal.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "16/06/2026",
    dataRealizacao: "19/06/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00008-2026 - TV Câmara",
        url: "/documents/AVISO DE DISPENSA 00008-2026 TV CAMARA.pdf",
      },
      {
        nome: "Edital Dispensa 00008-2026 - TV Câmara",
        url: "/documents/EDITAL DISPENSA 00008-2026 TV CAMARA.pdf",
      },
    ],
  },
  {
    id: 9,
    slug: "dispensa-de-licitacao-no-00009-2026",
    numero: "00009/2026",
    modalidade: MODALIDADE,
    objeto: "Material elétrico, hidráulico e de pintura",
    objetoCompleto:
      "Aquisição de material elétrico, hidráulico e pintura para atender as demandas da Câmara Municipal de Piancó-PB.",
    unidadeGestora: UNIDADE_GESTORA,
    cnpj: CNPJ,
    dataPublicacao: "17/08/2026",
    dataRealizacao: "20/08/2026 às 13:00",
    participante: "Aguardando participantes",
    cnpjParticipante: "-",
    valorProposta: "-",
    status: "Publicado",
    arquivos: [
      {
        nome: "Aviso de Dispensa 00009-2026 - Material Elétrico",
        url: "/documents/AVISO DE DISPENSA 00009-2026 MATERIAL ELETRICO.pdf",
      },
      {
        nome: "Edital Dispensa 00009-2026 - Material Elétrico",
        url: "/documents/EDITAL DISPENSA 00009-2026 MATERIAL ELETRICO.pdf",
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
