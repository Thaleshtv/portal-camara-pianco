"use client"

import { useState } from "react"
import { BsCheckCircleFill, BsClipboard, BsDownload, BsPrinterFill } from "react-icons/bs"
import { SITE } from "@/data/site"
import { baixarArquivo } from "@/lib/download"
import { formatarData, formatarDataHora } from "@/lib/formato"
import type { Canal } from "@/types/api"

export interface SolicitacaoRegistrada {
  protocolo: string
  prazo: string
  tipo: string
  registradoEm: string
}

interface ComprovanteSolicitacaoProps {
  canal: Canal
  solicitacao: SolicitacaoRegistrada
  onNova: () => void
}

const NOMES_CANAL: Record<Canal, string> = {
  esic: "e-SIC - Serviço de Informação ao Cidadão",
  ouvidoria: "Ouvidoria",
}

const botaoClassName =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm transition-colors cursor-pointer print:hidden"

function enderecoConsulta(canal: Canal): string {
  return `${window.location.origin}/${canal}/#consulta`
}

function montarComprovante(canal: Canal, solicitacao: SolicitacaoRegistrada): string {
  return [
    SITE.nome,
    `Comprovante de registro - ${NOMES_CANAL[canal]}`,
    "",
    `Protocolo: ${solicitacao.protocolo}`,
    `Tipo: ${solicitacao.tipo}`,
    `Registrado em: ${formatarDataHora(solicitacao.registradoEm)}`,
    `Prazo para resposta: ${formatarData(solicitacao.prazo)}`,
    "",
    "O acompanhamento é feito somente pelo número do protocolo. Não será enviado e-mail.",
    `Consulte o andamento e a resposta em: ${enderecoConsulta(canal)}`,
  ].join("\r\n")
}

export function ComprovanteSolicitacao({ canal, solicitacao, onNova }: ComprovanteSolicitacaoProps) {
  const [avisoCopia, setAvisoCopia] = useState<string | null>(null)
  const ehEsic = canal === "esic"

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(solicitacao.protocolo)
      setAvisoCopia("Protocolo copiado.")
    } catch {
      setAvisoCopia("Não foi possível copiar automaticamente. Selecione o número e copie manualmente.")
    }
  }

  const baixar = () => {
    baixarArquivo(`comprovante-${solicitacao.protocolo}.txt`, montarComprovante(canal, solicitacao), "text/plain;charset=utf-8")
  }

  return (
    <div role="status" className="border-2 border-green-600 bg-green-50 rounded-lg p-6 text-center">
      <BsCheckCircleFill className="text-green-600 mx-auto mb-3" size={40} />
      <h4 className="text-lg font-semibold text-text-primary">
        {ehEsic ? "Pedido registrado com sucesso" : "Manifestação registrada com sucesso"}
      </h4>

      <p className="text-sm text-text-primary/70 mt-4">Número do protocolo</p>
      <p className="text-2xl md:text-3xl font-bold text-blue-primary tracking-wide break-all select-all">{solicitacao.protocolo}</p>

      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
        <div>
          <dt className="text-text-primary/70">Tipo</dt>
          <dd className="font-semibold text-text-primary">{solicitacao.tipo}</dd>
        </div>
        <div>
          <dt className="text-text-primary/70">Registrado em</dt>
          <dd className="font-semibold text-text-primary">{formatarDataHora(solicitacao.registradoEm)}</dd>
        </div>
        <div>
          <dt className="text-text-primary/70">Prazo para resposta</dt>
          <dd className="font-semibold text-text-primary">{formatarData(solicitacao.prazo)}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button type="button" onClick={copiar} className={`${botaoClassName} bg-blue-primary text-white hover:bg-blue-primary/90`}>
          <BsClipboard /> Copiar
        </button>
        <button type="button" onClick={baixar} className={`${botaoClassName} bg-green-600 text-white hover:bg-green-700`}>
          <BsDownload /> Baixar comprovante
        </button>
        <button type="button" onClick={() => window.print()} className={`${botaoClassName} bg-gray-500 text-white hover:bg-gray-600`}>
          <BsPrinterFill /> Imprimir
        </button>
      </div>
      <p aria-live="polite" className="text-xs text-text-primary/70 mt-2 min-h-4">{avisoCopia}</p>

      <p className="text-sm text-text-primary mt-4 max-w-xl mx-auto">
        <strong>Guarde o número do protocolo.</strong> O acompanhamento e a resposta ficam disponíveis somente nesta página, na
        seção &quot;Consultar protocolo&quot;. <strong>Não será enviado e-mail.</strong>
      </p>

      <button
        type="button"
        onClick={onNova}
        className="mt-6 text-blue-primary text-sm font-medium hover:underline cursor-pointer print:hidden"
      >
        {ehEsic ? "Fazer novo pedido" : "Registrar nova manifestação"}
      </button>
    </div>
  )
}
