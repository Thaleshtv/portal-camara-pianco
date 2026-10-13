"use client"

import Link from "next/link"
import { useStoredPreference } from "@/hooks/useStoredPreference"

const CHAVE_CONSENTIMENTO = "consentimento-cookies"
const AGUARDANDO_NAVEGADOR = "aguardando-navegador"

export function CookieBanner() {
  const [consentimento, salvarConsentimento] = useStoredPreference(CHAVE_CONSENTIMENTO, AGUARDANDO_NAVEGADOR)

  if (consentimento !== null) {
    return null
  }

  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-0 inset-x-0 z-50 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-text-primary">
          Este portal armazena preferências no seu navegador para melhorar sua experiência. Saiba mais na nossa{" "}
          <Link href="/politica-de-privacidade" className="text-blue-primary hover:underline">Política de Privacidade</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => salvarConsentimento("recusado")}
            className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors cursor-pointer"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => salvarConsentimento("aceito")}
            className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors cursor-pointer"
          >
            Aceitar tudo
          </button>
        </div>
      </div>
    </div>
  )
}
