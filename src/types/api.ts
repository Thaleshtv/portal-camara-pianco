export type StatusPublicacao = "rascunho" | "publicado"

export interface RegistroBase {
  id: number
  status: StatusPublicacao
  criadoEm: string
  atualizadoEm: string
}

export interface Noticia extends RegistroBase {
  slug: string
  image: string
  tag: string
  title: string
  description: string
  content: string
  date: string
}

export interface Vereador extends RegistroBase {
  name: string
  fullName: string
  role: string
  partido: string
  email: string | null
  telefone: string | null
  image: string
  sessoes: number
  materias: number
}

export interface Comissao extends RegistroBase {
  name: string
  tipo: string
  membros: number[]
}

export interface Norma extends RegistroBase {
  tipo: string
  numero: string
  data: string
  ementa: string
  arquivoUrl: string | null
}

export type TipoDocumento =
  | "decretos-legislativos"
  | "resolucoes"
  | "atos-mesa-diretora"
  | "atos-presidencia"
  | "portarias-mesa-diretora"
  | "portarias-presidencia"
  | "atas-sessoes-ordinarias"
  | "atas-sessoes-extraordinarias"
  | "lei-organica-municipal"

export interface Documento extends RegistroBase {
  tipo: TipoDocumento
  titulo: string
  numero: string
  data: string
  descricao: string
  arquivoUrl: string
}

export interface DiarioOficial extends RegistroBase {
  edicao: string
  data: string
  descricao: string
  arquivoUrl: string
}

export interface LicitacaoArquivo {
  nome: string
  url: string
}

export interface Licitacao extends RegistroBase {
  slug: string
  numero: string
  processoAdministrativo: string
  modalidade: string
  objeto: string
  objetoCompleto: string
  valorEstimado: string
  unidadeGestora: string
  cnpj: string
  dataPublicacao: string
  dataRealizacao: string
  participante: string
  cnpjParticipante: string
  valorProposta: string
  situacao: string
  arquivos: LicitacaoArquivo[]
}

export type TipoSessao = "Ordinária" | "Extraordinária" | "Solene" | "Especial"
export type SituacaoSessao = "Agendada" | "Realizada" | "Cancelada"

export interface Sessao extends RegistroBase {
  tipo: TipoSessao
  numero: string
  data: string
  horario: string
  local: string
  pauta: string
  situacao: SituacaoSessao
}

export interface OrdemDoDia extends RegistroBase {
  sessao: string
  data: string
  arquivoUrl: string
}

export interface DocumentoTransparencia extends RegistroBase {
  categoria: string
  titulo: string
  data: string
  descricao: string
  arquivoUrl: string
}

export interface Colecoes {
  noticias: Noticia
  vereadores: Vereador
  comissoes: Comissao
  leis: Norma
  regimentos: Norma
  documentos: Documento
  diarios: DiarioOficial
  licitacoes: Licitacao
  sessoes: Sessao
  "ordens-do-dia": OrdemDoDia
  transparencia: DocumentoTransparencia
}

export type NomeColecao = keyof Colecoes

export type FiltrosColecao = Record<string, string | undefined>

export interface ErroDeCampo {
  campo: string
  mensagem: string
}

export type Canal = "esic" | "ouvidoria"

export type TipoPedidoEsic = "Pedido de informação" | "Recurso"
export type TipoManifestacao = "Reclamação" | "Denúncia" | "Sugestão" | "Elogio" | "Solicitação"

export interface PedidoEsic {
  tipo: TipoPedidoEsic
  nome: string
  documento: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
  site: string
}

export interface ManifestacaoOuvidoria {
  tipo: TipoManifestacao
  anonimo: boolean
  nome: string
  documento: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
  site: string
}

export interface CorposSolicitacao {
  esic: PedidoEsic
  ouvidoria: ManifestacaoOuvidoria
}

export interface ProtocoloRegistrado {
  protocolo: string
  prazo: string
  criadoEm: string
}

export interface DadosRecuperacao {
  email: string
  documento: string
}

export interface ProtocoloRecuperado {
  protocolo: string
  tipo: string
  situacao: string
  criadoEm: string
  prazo: string
}

export interface SituacaoProtocolo {
  protocolo: string
  tipo: string
  situacao: string
  sigilo: string
  criadoEm: string
  prazo: string
  resposta: string
  respondidoEm: string | null
}

export interface EstatisticasSolicitacoes {
  total: number
  porSituacao: Record<string, number>
  porTipo: Record<string, number>
  porSigilo: Record<string, number>
}

export interface LinhaRelatorio {
  protocolo: string
  tipo: string
  data: string
  situacao: string
  sigilo: string
}
