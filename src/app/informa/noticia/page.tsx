"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { NoticiaDetalhe } from "@/components/NoticiaDetalhe"

function NoticiaPorConsulta() {
  const id = useSearchParams().get("id") ?? ""
  return <NoticiaDetalhe id={id} />
}

export default function NoticiaPage() {
  return (
    <Suspense>
      <NoticiaPorConsulta />
    </Suspense>
  )
}
