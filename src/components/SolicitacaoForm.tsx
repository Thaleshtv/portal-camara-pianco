"use client"

import { useState, type FormEvent } from "react"
import { BsSendFill, BsXCircle } from "react-icons/bs"
import { ComprovanteSolicitacao, type SolicitacaoRegistrada } from "@/components/ComprovanteSolicitacao"
import { notificarSolicitacaoRegistrada } from "@/hooks/useSolicitacoesRegistradas"
import { ErroApi, registrarSolicitacao } from "@/services/api"
import type { Canal, ProtocoloRegistrado, TipoManifestacao, TipoPedidoEsic } from "@/types/api"

interface SolicitacaoFormProps {
  canal: Canal
}

interface CamposFormulario {
  tipo: string
  nome: string
  documento: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
  site: string
}

const TIPOS_ESIC: TipoPedidoEsic[] = ["Pedido de informação", "Recurso"]
const TIPOS_OUVIDORIA: TipoManifestacao[] = ["Reclamação", "Denúncia", "Sugestão", "Elogio", "Solicitação"]
const LIMITE_MENSAGEM = 5000

const inputClassName =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
const labelClassName = "block text-sm font-medium text-text-primary mb-1"

function ehTipoEsic(valor: string): valor is TipoPedidoEsic {
  return TIPOS_ESIC.some((tipo) => tipo === valor)
}

function ehTipoOuvidoria(valor: string): valor is TipoManifestacao {
  return TIPOS_OUVIDORIA.some((tipo) => tipo === valor)
}

function camposIniciais(canal: Canal): CamposFormulario {
  return {
    tipo: canal === "esic" ? TIPOS_ESIC[0] : TIPOS_OUVIDORIA[0],
    nome: "",
    documento: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    site: "",
  }
}

function enviar(canal: Canal, campos: CamposFormulario, anonimo: boolean): Promise<ProtocoloRegistrado> {
  if (canal === "esic") {
    return registrarSolicitacao("esic", { ...campos, tipo: ehTipoEsic(campos.tipo) ? campos.tipo : TIPOS_ESIC[0] })
  }
  return registrarSolicitacao("ouvidoria", {
    ...campos,
    tipo: ehTipoOuvidoria(campos.tipo) ? campos.tipo : TIPOS_OUVIDORIA[0],
    anonimo,
    nome: anonimo ? "" : campos.nome,
    documento: anonimo ? "" : campos.documento,
    telefone: anonimo ? "" : campos.telefone,
  })
}

export function SolicitacaoForm({ canal }: SolicitacaoFormProps) {
  const ehEsic = canal === "esic"
  const tipos: string[] = ehEsic ? TIPOS_ESIC : TIPOS_OUVIDORIA
  const [campos, setCampos] = useState<CamposFormulario>(() => camposIniciais(canal))
  const [anonimo, setAnonimo] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erroGeral, setErroGeral] = useState<string | null>(null)
  const [errosPorCampo, setErrosPorCampo] = useState<Record<string, string>>({})
  const [registrado, setRegistrado] = useState<SolicitacaoRegistrada | null>(null)

  const alterar = (campo: keyof CamposFormulario, valor: string) => {
    setCampos((anteriores) => ({ ...anteriores, [campo]: valor }))
  }

  const limpar = () => {
    setCampos(camposIniciais(canal))
    setAnonimo(false)
    setErroGeral(null)
    setErrosPorCampo({})
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEnviando(true)
    setErroGeral(null)
    setErrosPorCampo({})
    try {
      const resposta = await enviar(canal, campos, anonimo)
      setRegistrado({ ...resposta, tipo: campos.tipo, registradoEm: resposta.criadoEm })
      notificarSolicitacaoRegistrada()
      limpar()
    } catch (erro) {
      if (erro instanceof ErroApi && erro.status === 400) {
        setErrosPorCampo(Object.fromEntries(erro.campos.map((item) => [item.campo, item.mensagem])))
        setErroGeral(erro.campos.length > 0 ? "Revise os campos destacados e tente novamente." : erro.message)
      } else {
        setErroGeral("Não foi possível enviar sua solicitação agora. Tente novamente mais tarde ou utilize o atendimento presencial.")
      }
    } finally {
      setEnviando(false)
    }
  }

  const mensagemDoCampo = (campo: string) =>
    errosPorCampo[campo] ? (
      <p id={`${canal}-${campo}-erro`} className="text-xs text-red-600 mt-1">{errosPorCampo[campo]}</p>
    ) : null

  const atributosDeErro = (campo: string) => ({
    "aria-invalid": errosPorCampo[campo] ? true : undefined,
    "aria-describedby": errosPorCampo[campo] ? `${canal}-${campo}-erro` : undefined,
  })

  if (registrado) {
    return <ComprovanteSolicitacao canal={canal} solicitacao={registrado} onNova={() => setRegistrado(null)} />
  }

  return (
    <form onSubmit={handleSubmit}>
      {!ehEsic && (
        <fieldset className="mb-4">
          <legend className={labelClassName}>Identificação</legend>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-text-primary cursor-pointer">
              <input type="radio" name={`${canal}-identificacao`} checked={!anonimo} onChange={() => setAnonimo(false)} />
              Identificado
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-text-primary cursor-pointer">
              <input type="radio" name={`${canal}-identificacao`} checked={anonimo} onChange={() => setAnonimo(true)} />
              Anônimo
            </label>
          </div>
          {anonimo && (
            <p role="note" className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded px-3 py-2 mt-2">
              Na manifestação anônima seus dados pessoais não são registrados. O número do protocolo será a única forma de
              acompanhar a manifestação e <strong>não poderá ser recuperado</strong> se for perdido.
            </p>
          )}
        </fieldset>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${canal}-tipo`} className={labelClassName}>Tipo *</label>
          <select
            id={`${canal}-tipo`}
            required
            value={campos.tipo}
            onChange={(e) => alterar("tipo", e.target.value)}
            className={inputClassName}
            {...atributosDeErro("tipo")}
          >
            {tipos.map((opcao) => (
              <option key={opcao} value={opcao}>{opcao}</option>
            ))}
          </select>
          {mensagemDoCampo("tipo")}
        </div>

        <div>
          <label htmlFor={`${canal}-assunto`} className={labelClassName}>Assunto{ehEsic ? "" : " *"}</label>
          <input
            id={`${canal}-assunto`}
            type="text"
            required={!ehEsic}
            value={campos.assunto}
            onChange={(e) => alterar("assunto", e.target.value)}
            className={inputClassName}
            {...atributosDeErro("assunto")}
          />
          {mensagemDoCampo("assunto")}
        </div>

        {!anonimo && (
          <>
            <div>
              <label htmlFor={`${canal}-nome`} className={labelClassName}>Nome{ehEsic ? " *" : ""}</label>
              <input
                id={`${canal}-nome`}
                type="text"
                autoComplete="name"
                required={ehEsic}
                value={campos.nome}
                onChange={(e) => alterar("nome", e.target.value)}
                className={inputClassName}
                {...atributosDeErro("nome")}
              />
              {mensagemDoCampo("nome")}
            </div>
            <div>
              <label htmlFor={`${canal}-documento`} className={labelClassName}>CPF/CNPJ (recomendado)</label>
              <input
                id={`${canal}-documento`}
                type="text"
                inputMode="numeric"
                value={campos.documento}
                onChange={(e) => alterar("documento", e.target.value)}
                className={inputClassName}
                aria-invalid={errosPorCampo.documento ? true : undefined}
                aria-describedby={`${canal}-documento-ajuda${errosPorCampo.documento ? ` ${canal}-documento-erro` : ""}`}
              />
              <p id={`${canal}-documento-ajuda`} className="text-xs text-text-primary/60 mt-1">
                Com o CPF/CNPJ e o e-mail informados você consegue recuperar o protocolo caso o perca.
              </p>
              {mensagemDoCampo("documento")}
            </div>
          </>
        )}

        <div>
          <label htmlFor={`${canal}-email`} className={labelClassName}>E-mail{anonimo ? "" : " *"}</label>
          <input
            id={`${canal}-email`}
            type="email"
            autoComplete="email"
            required={!anonimo}
            value={campos.email}
            onChange={(e) => alterar("email", e.target.value)}
            className={inputClassName}
            {...atributosDeErro("email")}
          />
          {mensagemDoCampo("email")}
        </div>

        {!anonimo && (
          <div>
            <label htmlFor={`${canal}-telefone`} className={labelClassName}>Telefone</label>
            <input
              id={`${canal}-telefone`}
              type="tel"
              autoComplete="tel"
              value={campos.telefone}
              onChange={(e) => alterar("telefone", e.target.value)}
              className={inputClassName}
              {...atributosDeErro("telefone")}
            />
            {mensagemDoCampo("telefone")}
          </div>
        )}

        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor={`${canal}-site`}>Site</label>
          <input
            id={`${canal}-site`}
            type="text"
            name="site"
            tabIndex={-1}
            autoComplete="off"
            value={campos.site}
            onChange={(e) => alterar("site", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={`${canal}-mensagem`} className={labelClassName}>
            {ehEsic ? "Descreva a informação solicitada" : "Descreva sua manifestação"} *
          </label>
          <textarea
            id={`${canal}-mensagem`}
            required
            rows={6}
            maxLength={LIMITE_MENSAGEM}
            value={campos.mensagem}
            onChange={(e) => alterar("mensagem", e.target.value)}
            className={inputClassName}
            {...atributosDeErro("mensagem")}
          />
          {mensagemDoCampo("mensagem")}
        </div>
      </div>

      {erroGeral && (
        <p role="alert" className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">{erroGeral}</p>
      )}

      <p className="text-xs text-text-primary/60 mt-3">
        Ao enviar, será exibido um número de protocolo. O acompanhamento é feito somente por ele, nesta página; não será enviado e-mail.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        <button
          type="submit"
          disabled={enviando}
          className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <BsSendFill /> {enviando ? "ENVIANDO..." : "ENVIAR"}
        </button>
        <button
          type="button"
          onClick={limpar}
          disabled={enviando}
          className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-60"
        >
          <BsXCircle /> LIMPAR
        </button>
      </div>
    </form>
  )
}
