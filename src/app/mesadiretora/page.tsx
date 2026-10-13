"use client"

import Link from "next/link"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { PageCard } from "@/components/PageCard"
import { useColecao } from "@/hooks/useApi"
import { rotaVereador } from "@/lib/rotas"
import { getMesaDiretora } from "@/services/vereadores"

export default function MesaDiretora() {
  const { itens, carregando, erro } = useColecao("vereadores")
  const mesaDiretora = getMesaDiretora(itens)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <PageCard title="Mesa Diretora" bodyClassName="">
          <ConteudoRemoto
            carregando={carregando}
            erro={erro}
            vazio={mesaDiretora.length === 0}
            mensagemVazio="Nenhum membro da Mesa Diretora encontrado."
          >
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mesaDiretora.map((membro) => (
                  <Link key={membro.id} href={rotaVereador(membro.id)} className="block">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow text-center">
                      <div className="p-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={membro.image} alt={membro.name} className="w-[120px] h-[120px] rounded-full object-cover mx-auto" />
                        <h4 className="font-bold text-text-primary mt-4 hover:text-blue-primary transition-colors">{membro.name}</h4>
                        <p className="text-xs text-text-primary/60 mt-1">{membro.fullName}</p>
                        <p className="text-sm text-blue-primary font-medium mt-2">{membro.role}</p>
                        <p className="text-xs text-text-primary/60 mt-1">Partido: {membro.partido}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ConteudoRemoto>
        </PageCard>
      </div>
    </section>
  )
}
