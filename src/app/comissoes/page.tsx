"use client"

import Link from "next/link"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { rotaVereador } from "@/lib/rotas"
import type { Vereador } from "@/types/api"

export default function Comissoes() {
  const comissoes = useColecao("comissoes")
  const vereadores = useColecao("vereadores")
  const vereadoresPorId = new Map<number, Vereador>(vereadores.itens.map((vereador) => [vereador.id, vereador]))

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <ListaCard
          titulo="Lista de comissões"
          total={comissoes.itens.length}
          atualizadoEm={null}
          carregando={comissoes.carregando}
          erro={comissoes.erro}
          mensagemVazio="Nenhuma comissão encontrada."
        >
          <div className="p-6 space-y-4">
            {comissoes.itens.map((comissao) => {
              const membros = comissao.membros
                .map((id) => vereadoresPorId.get(id))
                .filter((membro): membro is Vereador => membro !== undefined)

              return (
                <div key={comissao.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-blue-primary font-bold uppercase text-sm">{comissao.name}</p>
                      <p className="text-sm text-text-primary/70 mt-1">{comissao.tipo}</p>
                      {membros.length > 0 && (
                        <p className="text-xs text-text-primary/60 mt-2">{membros.map((membro) => membro.name).join(", ")}</p>
                      )}
                    </div>
                    <div className="flex -space-x-2">
                      {membros.map((membro) => (
                        <Link key={membro.id} href={rotaVereador(membro.id)} title={membro.name}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={membro.image}
                            alt={membro.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ListaCard>
      </div>
    </section>
  )
}
