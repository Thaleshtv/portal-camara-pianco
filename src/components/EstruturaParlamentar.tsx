"use client"

import Link from "next/link"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { PageCard } from "@/components/PageCard"
import { useColecao } from "@/hooks/useApi"
import { rotaVereador } from "@/lib/rotas"
import { getMesaDiretora } from "@/services/vereadores"

export function EstruturaParlamentar() {
  const vereadores = useColecao("vereadores")
  const comissoes = useColecao("comissoes")
  const mesaDiretora = getMesaDiretora(vereadores.itens)
  const totalVereadores = vereadores.itens.length

  return (
    <>
      <PageCard title="Plenário">
        <p className="text-[15px] leading-relaxed text-text-primary">
          Órgão deliberativo máximo da Câmara, composto {totalVereadores > 0 ? `pelos ${totalVereadores} vereadores` : "pelos vereadores"} da
          Legislatura 2025/2028.{" "}
          <Link href="/legislatura" className="text-blue-primary hover:underline">Ver composição</Link>
        </p>
      </PageCard>

      <PageCard title="Mesa Diretora" bodyClassName="">
        <ConteudoRemoto
          carregando={vereadores.carregando}
          erro={vereadores.erro}
          vazio={mesaDiretora.length === 0}
          mensagemVazio="Nenhum membro da Mesa Diretora encontrado."
        >
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mesaDiretora.map((membro) => (
              <Link
                key={membro.id}
                href={rotaVereador(membro.id)}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={membro.image} alt={membro.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-text-primary text-sm">{membro.name}</p>
                  <p className="text-xs text-blue-primary">{membro.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </ConteudoRemoto>
      </PageCard>

      <PageCard title="Comissões" bodyClassName="">
        <ConteudoRemoto
          carregando={comissoes.carregando}
          erro={comissoes.erro}
          vazio={comissoes.itens.length === 0}
          mensagemVazio="Nenhuma comissão encontrada."
        >
          <ul className="p-6 space-y-2">
            {comissoes.itens.map((comissao) => (
              <li key={comissao.id}>
                <Link href="/comissoes" className="text-sm text-text-primary hover:text-blue-primary">
                  {comissao.name}
                </Link>
              </li>
            ))}
          </ul>
        </ConteudoRemoto>
      </PageCard>
    </>
  )
}
