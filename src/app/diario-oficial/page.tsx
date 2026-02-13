"use client"

import { useState } from "react"
import { BsSearch, BsXCircle, BsDownload, BsInboxFill } from "react-icons/bs"

export interface DiarioOficial {
  id: number
  edicao: string
  data: string
  descricao: string
  arquivoUrl: string
}

const diarios: DiarioOficial[] = [
  {
    id: 1,
    edicao: "001/2026",
    data: "12/02/2026",
    descricao: "Edição de 12 de Fevereiro de 2026",
    arquivoUrl: "/documents/Edição de 12 de FEVEREIRO de 2026.pdf",
  },
]

export default function DiarioOficial() {
  const [periodoInicio, setPeriodoInicio] = useState("")
  const [periodoFim, setPeriodoFim] = useState("")
  const [exercicio, setExercicio] = useState("")
  const [descricao, setDescricao] = useState("")
  const [edicao, setEdicao] = useState("")

  const handleLimpar = () => {
    setPeriodoInicio("")
    setPeriodoFim("")
    setExercicio("")
    setDescricao("")
    setEdicao("")
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Card Filtros */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Filtros</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Período */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Período</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={periodoInicio}
                    onChange={(e) => setPeriodoInicio(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  />
                  <input
                    type="date"
                    value={periodoFim}
                    onChange={(e) => setPeriodoFim(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Exercício */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Exercício</label>
                <input
                  type="text"
                  value={exercicio}
                  onChange={(e) => setExercicio(e.target.value)}
                  placeholder="Ex: 2025"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                />
              </div>

              {/* Edição */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Edição</label>
                <input
                  type="text"
                  value={edicao}
                  onChange={(e) => setEdicao(e.target.value)}
                  placeholder="Ex: 001/2025"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                />
              </div>

              {/* Descrição */}
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-text-primary mb-1">Descrição</label>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Buscar na descrição..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-2 mt-6">
              <button className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 cursor-pointer">
                <BsSearch /> PESQUISAR
              </button>
              <button
                onClick={handleLimpar}
                className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BsXCircle /> LIMPAR
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-2 cursor-pointer">
                <BsDownload /> EXPORTAÇÃO
              </button>
            </div>
          </div>
        </div>

        {/* Card Lista do Diário Oficial */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Diário Oficial do Poder Legislativo
            </h3>
          </div>
          {diarios.length === 0 ? (
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <BsInboxFill className="text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 text-sm">
                Nenhum diário oficial encontrado.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-text-primary/70 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3">Edição</th>
                    <th className="px-6 py-3">Data</th>
                    <th className="px-6 py-3">Descrição</th>
                    <th className="px-6 py-3 text-center">Arquivo</th>
                  </tr>
                </thead>
                <tbody>
                  {diarios.map((diario) => (
                    <tr key={diario.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium text-text-primary">{diario.edicao}</td>
                      <td className="px-6 py-3 text-text-primary/70">{diario.data}</td>
                      <td className="px-6 py-3 text-text-primary/70">{diario.descricao}</td>
                      <td className="px-6 py-3 text-center">
                        <a
                          href={diario.arquivoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-primary hover:underline text-xs font-medium"
                        >
                          <BsDownload size={14} /> PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
