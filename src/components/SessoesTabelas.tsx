"use client"

import { BotaoPdf } from "@/components/BotaoPdf"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { PageCard } from "@/components/PageCard"
import { useColecao } from "@/hooks/useApi"
import { formatarData } from "@/lib/formato"

export function SessoesTabelas() {
  const sessoes = useColecao("sessoes")
  const ordensDoDia = useColecao("ordens-do-dia")

  return (
    <>
      <PageCard id="calendario" title="Calendário de Sessões" bodyClassName="">
        <ConteudoRemoto
          carregando={sessoes.carregando}
          erro={sessoes.erro}
          vazio={sessoes.itens.length === 0}
          mensagemVazio="Nenhuma sessão agendada."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Sessão</th>
                  <th className="px-6 py-3">Tipo</th>
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3">Horário</th>
                  <th className="px-6 py-3">Local</th>
                  <th className="px-6 py-3">Pauta</th>
                  <th className="px-6 py-3">Situação</th>
                </tr>
              </thead>
              <tbody>
                {sessoes.itens.map((sessao) => (
                  <tr key={sessao.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-text-primary">{sessao.numero}</td>
                    <td className="px-6 py-3 text-text-primary/70">{sessao.tipo}</td>
                    <td className="px-6 py-3 text-text-primary/70">{formatarData(sessao.data)}</td>
                    <td className="px-6 py-3 text-text-primary/70">{sessao.horario}</td>
                    <td className="px-6 py-3 text-text-primary/70">{sessao.local}</td>
                    <td className="px-6 py-3 text-text-primary/70 whitespace-pre-line">{sessao.pauta}</td>
                    <td className="px-6 py-3 text-text-primary/70">{sessao.situacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ConteudoRemoto>
      </PageCard>

      <PageCard id="ordem-do-dia" title="Ordem do Dia" bodyClassName="">
        <ConteudoRemoto
          carregando={ordensDoDia.carregando}
          erro={ordensDoDia.erro}
          vazio={ordensDoDia.itens.length === 0}
          mensagemVazio="Nenhuma ordem do dia publicada."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Sessão</th>
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3 text-center">Arquivo</th>
                </tr>
              </thead>
              <tbody>
                {ordensDoDia.itens.map((ordem) => (
                  <tr key={ordem.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-text-primary">{ordem.sessao}</td>
                    <td className="px-6 py-3 text-text-primary/70">{formatarData(ordem.data)}</td>
                    <td className="px-6 py-3 text-center">
                      <BotaoPdf href={ordem.arquivoUrl} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ConteudoRemoto>
      </PageCard>
    </>
  )
}
