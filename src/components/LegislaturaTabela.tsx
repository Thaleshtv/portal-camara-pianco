"use client"

import Link from "next/link"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { useColecao } from "@/hooks/useApi"
import { rotaVereador } from "@/lib/rotas"

export function LegislaturaTabela() {
  const { itens: vereadores, carregando, erro } = useColecao("vereadores")

  return (
    <ConteudoRemoto carregando={carregando} erro={erro} vazio={vereadores.length === 0} mensagemVazio="Nenhum vereador encontrado.">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
            <tr>
              <th className="px-6 py-3">Vereador(a)</th>
              <th className="px-6 py-3">Nome completo</th>
              <th className="px-6 py-3">Cargo</th>
              <th className="px-6 py-3">Partido</th>
            </tr>
          </thead>
          <tbody>
            {vereadores.map((vereador) => (
              <tr key={vereador.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3">
                  <Link href={rotaVereador(vereador.id)} className="flex items-center gap-3 font-medium text-text-primary hover:text-blue-primary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={vereador.image} alt={vereador.name} className="w-10 h-10 rounded-full object-cover" />
                    {vereador.name}
                  </Link>
                </td>
                <td className="px-6 py-3 text-text-primary/70">{vereador.fullName}</td>
                <td className="px-6 py-3 text-text-primary/70">{vereador.role}</td>
                <td className="px-6 py-3 text-text-primary/70">{vereador.partido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ConteudoRemoto>
  )
}
