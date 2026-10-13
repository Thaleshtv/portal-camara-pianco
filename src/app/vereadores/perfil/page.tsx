"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { VereadorPerfil } from "@/components/VereadorPerfil"

function VereadorPorConsulta() {
  const id = useSearchParams().get("id") ?? ""
  return <VereadorPerfil id={id} />
}

export default function VereadorPerfilPage() {
  return (
    <Suspense>
      <VereadorPorConsulta />
    </Suspense>
  )
}
