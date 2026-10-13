"use client"

import Link from "next/link"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { rotaVereador } from "@/lib/rotas"

export default function Vereadores() {
  const { itens: vereadores, carregando, erro } = useColecao("vereadores")

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <ListaCard
          titulo="Lista de vereadores"
          total={vereadores.length}
          atualizadoEm={null}
          carregando={carregando}
          erro={erro}
          mensagemVazio="Nenhum vereador encontrado."
        >
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vereadores.map((vereador) => (
                <Link key={vereador.id} href={rotaVereador(vereador.id)} className="block">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={vereador.image} alt={vereador.name} className="w-[70px] h-[70px] rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-text-primary hover:text-blue-primary transition-colors">
                            {vereador.name}
                          </h4>
                          <p className="text-xs text-text-primary/60">{vereador.fullName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ListaCard>
      </div>
    </section>
  )
}
