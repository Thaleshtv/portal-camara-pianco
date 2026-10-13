"use client"

import { useEffect } from "react"
import { MdContrast } from "react-icons/md"
import { useStoredPreference } from "@/hooks/useStoredPreference"

const ESCALA_PADRAO = 1
const ESCALA_MINIMA = 0.9
const ESCALA_MAXIMA = 1.3
const PASSO = 0.1
const CHAVE_ESCALA = "acessibilidade-escala"
const CHAVE_CONTRASTE = "acessibilidade-contraste"
const CLASSE_CONTRASTE = "alto-contraste"

function lerEscala(valor: string | null): number {
  const escala = Number(valor)
  return escala >= ESCALA_MINIMA && escala <= ESCALA_MAXIMA ? escala : ESCALA_PADRAO
}

function arredondar(valor: number): number {
  return Math.round(valor * 10) / 10
}

export function AccessibilityControls() {
  const [escalaSalva, salvarEscala] = useStoredPreference(CHAVE_ESCALA)
  const [contrasteSalvo, salvarContraste] = useStoredPreference(CHAVE_CONTRASTE)
  const escala = lerEscala(escalaSalva)
  const contraste = contrasteSalvo === "1"

  useEffect(() => {
    document.body.style.zoom = escala === ESCALA_PADRAO ? "" : String(escala)
  }, [escala])

  useEffect(() => {
    document.documentElement.classList.toggle(CLASSE_CONTRASTE, contraste)
  }, [contraste])

  const setEscala = (novaEscala: number) => salvarEscala(String(arredondar(novaEscala)))

  const botaoClassName = "hover:opacity-80 cursor-pointer px-1"

  return (
    <div className="flex items-center gap-1 sm:gap-2" role="group" aria-label="Acessibilidade">
      <button
        type="button"
        onClick={() => setEscala(Math.min(escala + PASSO, ESCALA_MAXIMA))}
        className={botaoClassName}
        aria-label="Aumentar fonte"
        title="Aumentar fonte"
      >
        A+
      </button>
      <button
        type="button"
        onClick={() => setEscala(Math.max(escala - PASSO, ESCALA_MINIMA))}
        className={botaoClassName}
        aria-label="Diminuir fonte"
        title="Diminuir fonte"
      >
        A-
      </button>
      <button
        type="button"
        onClick={() => salvarContraste(contraste ? "0" : "1")}
        className={botaoClassName}
        aria-label="Alto contraste"
        aria-pressed={contraste}
        title="Alto contraste"
      >
        <MdContrast size={16} />
      </button>
      <button
        type="button"
        onClick={() => {
          setEscala(ESCALA_PADRAO)
          salvarContraste("0")
        }}
        className={botaoClassName}
        aria-label="Restaurar padrão"
        title="Restaurar padrão"
      >
        Reset
      </button>
    </div>
  )
}
