"use client"

import { useState, type FormEvent } from "react"
import { BsSearch } from "react-icons/bs"
import { InfoList } from "@/components/InfoList"
import { RecuperarProtocolo } from "@/components/RecuperarProtocolo"
import { formatarData, formatarDataHora } from "@/lib/formato"
import { ErroApi, consultarProtocolo } from "@/services/api"
import type { Canal, SituacaoProtocolo } from "@/types/api"

interface ConsultaProtocoloProps {
  canal: Canal
}

const EXEMPLOS: Record<Canal, string> = {
  esic: "SIC-20260101-AB12CD34",
  ouvidoria: "OUV-20260101-AB12CD34",
}

export function ConsultaProtocolo({ canal }: ConsultaProtocoloProps) {
  const [protocolo, setProtocolo] = useState("")
  const [consultando, setConsultando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [resultado, setResultado] = useState<SituacaoProtocolo | null>(null)

  const [recuperando, setRecuperando] = useState(false)

  const consultar = async (numero: string) => {
    if (!numero.trim()) {
      return
    }
    setConsultando(true)
    setErro(null)
    setResultado(null)
    try {
      setResultado(await consultarProtocolo(canal, numero))
    } catch (falha) {
      setErro(
        falha instanceof ErroApi && falha.status === 404
          ? "Protocolo não encontrado. Confira o número informado."
          : "Não foi possível consultar o protocolo agora. Tente novamente mais tarde."
      )
    } finally {
      setConsultando(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void consultar(protocolo)
  }

  const selecionarRecuperado = (numero: string) => {
    setProtocolo(numero)
    void consultar(numero)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor={`${canal}-consulta`} className="sr-only">Número do protocolo</label>
        <input
          id={`${canal}-consulta`}
          type="text"
          required
          value={protocolo}
          onChange={(e) => setProtocolo(e.target.value)}
          placeholder={`Ex: ${EXEMPLOS[canal]}`}
          className="flex-1 min-w-0 border border-gray-300 rounded px-3 py-2 text-sm uppercase placeholder:normal-case focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
        />
        <button
          type="submit"
          disabled={consultando}
          className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <BsSearch /> {consultando ? "CONSULTANDO..." : "CONSULTAR"}
        </button>
      </form>

      <button
        type="button"
        aria-expanded={recuperando}
        onClick={() => setRecuperando((aberto) => !aberto)}
        className="mt-3 text-blue-primary text-sm font-medium hover:underline cursor-pointer"
      >
        Esqueci meu protocolo
      </button>
      {recuperando && <RecuperarProtocolo canal={canal} onSelecionar={selecionarRecuperado} />}

      {erro && (
        <p role="alert" className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">{erro}</p>
      )}

      {resultado && (
        <div role="status" className="mt-6 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <p className="font-bold text-blue-primary break-all">{resultado.protocolo}</p>
            <span className="inline-flex items-center bg-blue-primary/10 text-blue-primary text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
              {resultado.situacao}
            </span>
          </div>
          <InfoList
            items={[
              { label: "Tipo", value: resultado.tipo },
              { label: "Registrado em", value: formatarDataHora(resultado.criadoEm) },
              { label: "Prazo para resposta", value: formatarData(resultado.prazo) },
              { label: "Grau de sigilo", value: resultado.sigilo },
              { label: "Respondido em", value: resultado.respondidoEm ? formatarDataHora(resultado.respondidoEm) : "Aguardando resposta" },
            ]}
          />
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Resposta</h4>
            <p className="text-sm text-text-primary whitespace-pre-line">
              {resultado.resposta || "Ainda não há resposta para este protocolo."}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
