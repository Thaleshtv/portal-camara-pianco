"use client"

import { BotaoPdf } from "@/components/BotaoPdf"
import { ListaCard } from "@/components/ListaCard"
import { useColecao } from "@/hooks/useApi"
import { formatarData, maiorAtualizacao } from "@/lib/formato"

interface DocumentosTransparenciaProps {
  categoria: string
}

export function DocumentosTransparencia({ categoria }: DocumentosTransparenciaProps) {
  const { itens, carregando, erro } = useColecao("transparencia", { categoria })
  const documentos = itens.filter((documento) => documento.categoria === categoria)

  return (
    <ListaCard
      titulo="Documentos"
      total={documentos.length}
      atualizadoEm={maiorAtualizacao(documentos)}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhum documento publicado."
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
            <tr>
              <th className="px-6 py-3">Documento</th>
              <th className="px-6 py-3">Data</th>
              <th className="px-6 py-3">Descrição</th>
              <th className="px-6 py-3 text-center">Arquivo</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((documento) => (
              <tr key={documento.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-text-primary">{documento.titulo}</td>
                <td className="px-6 py-3 text-text-primary/70">{formatarData(documento.data)}</td>
                <td className="px-6 py-3 text-text-primary/70">{documento.descricao}</td>
                <td className="px-6 py-3 text-center">
                  <BotaoPdf href={documento.arquivoUrl} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListaCard>
  )
}
