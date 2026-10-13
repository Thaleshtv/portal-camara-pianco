import type {
  Canal,
  Colecoes,
  CorposSolicitacao,
  DadosRecuperacao,
  ErroDeCampo,
  FiltrosColecao,
  NomeColecao,
  ProtocoloRecuperado,
  ProtocoloRegistrado,
  SituacaoProtocolo,
} from "@/types/api"

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").trim().replace(/\/+$/, "")

export class ErroApi extends Error {
  constructor(
    public readonly status: number,
    mensagem: string,
    public readonly campos: ErroDeCampo[] = []
  ) {
    super(mensagem)
    this.name = "ErroApi"
  }
}

export function apiConfigurada(): boolean {
  return API_URL !== ""
}

export function montarUrl(caminho: string): string {
  return `${API_URL}${caminho}`
}

export function caminhoColecao(colecao: NomeColecao, filtros: FiltrosColecao = {}): string {
  const parametros = new URLSearchParams()
  Object.entries(filtros).forEach(([chave, valor]) => {
    if (valor) {
      parametros.set(chave, valor)
    }
  })
  const consulta = parametros.toString()
  return `/public/${colecao}${consulta ? `?${consulta}` : ""}`
}

export function caminhoRegistro(colecao: NomeColecao, id: string | number): string {
  return `/public/${colecao}/${encodeURIComponent(String(id))}`
}

function ehObjeto(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === "object" && valor !== null
}

function extrairCampos(corpo: unknown): ErroDeCampo[] {
  if (!ehObjeto(corpo) || !Array.isArray(corpo.campos)) {
    return []
  }
  return corpo.campos.filter(ehObjeto).map((item) => ({
    campo: String(item.campo ?? ""),
    mensagem: String(item.mensagem ?? ""),
  }))
}

async function lerCorpo(resposta: Response): Promise<unknown> {
  try {
    return await resposta.json()
  } catch {
    return null
  }
}

export async function requisitar<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  if (!apiConfigurada()) {
    throw new ErroApi(0, "API não configurada")
  }
  let resposta: Response
  try {
    resposta = await fetch(montarUrl(caminho), opcoes)
  } catch {
    throw new ErroApi(0, "Não foi possível conectar ao servidor")
  }
  const corpo = await lerCorpo(resposta)
  if (!resposta.ok) {
    const mensagem = ehObjeto(corpo) && typeof corpo.message === "string" ? corpo.message : "Erro ao consultar o servidor"
    throw new ErroApi(resposta.status, mensagem, extrairCampos(corpo))
  }
  return corpo as T
}

export function listarColecao<K extends NomeColecao>(colecao: K, filtros?: FiltrosColecao): Promise<Colecoes[K][]> {
  return requisitar<Colecoes[K][]>(caminhoColecao(colecao, filtros))
}

export async function listarParaBuild<K extends NomeColecao>(colecao: K): Promise<Colecoes[K][]> {
  try {
    const registros = await listarColecao(colecao)
    return Array.isArray(registros) ? registros : []
  } catch {
    return []
  }
}

function enviarJson<T>(caminho: string, corpo: unknown): Promise<T> {
  return requisitar<T>(caminho, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(corpo),
  })
}

export function registrarSolicitacao<C extends Canal>(canal: C, corpo: CorposSolicitacao[C]): Promise<ProtocoloRegistrado> {
  return enviarJson<ProtocoloRegistrado>(`/public/${canal}`, corpo)
}

export async function recuperarProtocolos(canal: Canal, dados: DadosRecuperacao): Promise<ProtocoloRecuperado[]> {
  const protocolos = await enviarJson<ProtocoloRecuperado[]>(`/public/${canal}/recuperar`, dados)
  return Array.isArray(protocolos) ? protocolos : []
}

export function consultarProtocolo(canal: Canal, protocolo: string): Promise<SituacaoProtocolo> {
  return requisitar<SituacaoProtocolo>(`/public/${canal}/${encodeURIComponent(protocolo.trim().toUpperCase())}`)
}

export function urlRelatorioCsv(canal: Canal): string {
  return montarUrl(`/public/${canal}/relatorio?formato=csv`)
}
