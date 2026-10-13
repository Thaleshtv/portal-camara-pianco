"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { LicitacaoDetalhe } from "@/components/LicitacaoDetalhe"

function LicitacaoPorConsulta() {
  const slug = useSearchParams().get("slug") ?? ""
  return <LicitacaoDetalhe slug={slug} />
}

export default function LicitacaoDetalhePage() {
  return (
    <Suspense>
      <LicitacaoPorConsulta />
    </Suspense>
  )
}
