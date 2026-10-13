"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { PageCard } from "@/components/PageCard"
import { EmptyState } from "@/components/EmptyState"
import { LoadingState } from "@/components/LoadingState"
import { SearchForm } from "@/components/SearchForm"
import { buscar } from "@/data/busca"
import { useIndiceBusca } from "@/hooks/useIndiceBusca"

function BuscaContent() {
  const searchParams = useSearchParams()
  const termo = searchParams.get("q") ?? ""
  const { indice, carregando, incompleto } = useIndiceBusca()
  const resultados = buscar(indice, termo)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-6">
        <PageCard title="Pesquisar no portal">
          <SearchForm key={termo} initialValue={termo} />
        </PageCard>

        {termo && (
          <PageCard
            title={`Resultados para "${termo}"`}
            bodyClassName=""
            action={
              <em className="text-sm text-text-primary/60">
                {carregando ? "Carregando conteúdo publicado..." : `Foram encontrados ${resultados.length} registros`}
              </em>
            }
          >
            {incompleto && (
              <p role="status" className="px-6 py-3 text-xs text-amber-700 bg-amber-50 border-b border-amber-100">
                Parte do conteúdo não pôde ser carregada. Os resultados podem estar incompletos.
              </p>
            )}
            {resultados.length === 0 ? (
              carregando ? <LoadingState /> : <EmptyState message="Nenhum resultado encontrado." />
            ) : (
              <ul className="divide-y divide-gray-100">
                {resultados.map((resultado, posicao) => (
                  <li key={`${posicao}-${resultado.href}`} className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-blue-primary text-xs uppercase">{resultado.categoria}</span>
                    {resultado.externo ? (
                      <a
                        href={resultado.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-semibold text-text-primary hover:text-blue-primary"
                      >
                        {resultado.titulo}
                      </a>
                    ) : (
                      <Link href={resultado.href} className="block font-semibold text-text-primary hover:text-blue-primary">
                        {resultado.titulo}
                      </Link>
                    )}
                    <p className="text-sm text-text-primary/70 mt-1 line-clamp-2">{resultado.descricao}</p>
                  </li>
                ))}
              </ul>
            )}
          </PageCard>
        )}
      </div>
    </section>
  )
}

export default function Busca() {
  return (
    <Suspense>
      <BuscaContent />
    </Suspense>
  )
}
