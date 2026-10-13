"use client"

import { useState, type FormEvent } from "react"
import { BsSearch } from "react-icons/bs"
import { formatarData, formatarDataHora } from "@/lib/formato"
import { ErroApi, recuperarProtocolos } from "@/services/api"
import type { Canal, ProtocoloRecuperado } from "@/types/api"

interface RecuperarProtocoloProps {
  canal: Canal
  onSelecionar: (protocolo: string) => void
}

const inputClassName =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
const labelClassName = "block text-sm font-medium text-text-primary mb-1"

export function RecuperarProtocolo({ canal, onSelecionar }: RecuperarProtocoloProps) {
  const [email, setEmail] = useState("")
  const [documento, setDocumento] = useState("")
  const [buscando, setBuscando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [errosPorCampo, setErrosPorCampo] = useState<Record<string, string>>({})
  const [encontrados, setEncontrados] = useState<ProtocoloRecuperado[] | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBuscando(true)
    setErro(null)
    setErrosPorCampo({})
    setEncontrados(null)
    try {
      setEncontrados(await recuperarProtocolos(canal, { email: email.trim(), documento: documento.trim() }))
    } catch (falha) {
      if (falha instanceof ErroApi && falha.status === 400) {
        setErrosPorCampo(Object.fromEntries(falha.campos.map((item) => [item.campo, item.mensagem])))
        setErro(falha.campos.length > 0 ? "Revise os campos destacados e tente novamente." : falha.message)
      } else {
        setErro("Não foi possível buscar seus protocolos agora. Tente novamente mais tarde.")
      }
    } finally {
      setBuscando(false)
    }
  }

  return (
    <div className="mt-4 border border-gray-200 rounded-lg p-4">
      <p className="text-sm text-text-primary mb-4">
        Informe o mesmo e-mail e o mesmo CPF/CNPJ usados no registro. Só é possível recuperar solicitações identificadas e
        registradas com CPF/CNPJ.
        {canal === "ouvidoria" && " Manifestações anônimas não podem ser recuperadas."}
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 md:items-start">
        <div>
          <label htmlFor={`${canal}-recuperar-email`} className={labelClassName}>E-mail *</label>
          <input
            id={`${canal}-recuperar-email`}
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
            aria-invalid={errosPorCampo.email ? true : undefined}
          />
          {errosPorCampo.email && <p className="text-xs text-red-600 mt-1">{errosPorCampo.email}</p>}
        </div>
        <div>
          <label htmlFor={`${canal}-recuperar-documento`} className={labelClassName}>CPF/CNPJ *</label>
          <input
            id={`${canal}-recuperar-documento`}
            type="text"
            inputMode="numeric"
            required
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className={inputClassName}
            aria-invalid={errosPorCampo.documento ? true : undefined}
          />
          {errosPorCampo.documento && <p className="text-xs text-red-600 mt-1">{errosPorCampo.documento}</p>}
        </div>
        <button
          type="submit"
          disabled={buscando}
          className="md:mt-6 bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <BsSearch /> {buscando ? "BUSCANDO..." : "BUSCAR PROTOCOLOS"}
        </button>
      </form>

      {erro && (
        <p role="alert" className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">{erro}</p>
      )}

      {encontrados && encontrados.length === 0 && (
        <p role="status" className="mt-4 text-sm text-text-primary/70">
          Nenhum protocolo encontrado para os dados informados.
        </p>
      )}

      {encontrados && encontrados.length > 0 && (
        <ul role="status" className="mt-4 divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden">
          {encontrados.map((item) => (
            <li key={item.protocolo}>
              <button
                type="button"
                onClick={() => onSelecionar(item.protocolo)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <span>
                  <span className="block font-bold text-blue-primary break-all">{item.protocolo}</span>
                  <span className="block text-xs text-text-primary/70">
                    {item.tipo} &bull; Registrado em {formatarDataHora(item.criadoEm)} &bull; Prazo {formatarData(item.prazo)}
                  </span>
                </span>
                <span className="inline-flex items-center bg-blue-primary/10 text-blue-primary text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
                  {item.situacao}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
