"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { BsSearch, BsXCircle, BsDownload, BsInboxFill } from "react-icons/bs"

export interface Documento {
  id: number
  titulo: string
  numero: string
  data: string
  descricao: string
  tipo: string
  arquivoUrl: string
}

const TIPOS_DOCUMENTOS: Record<string, string> = {
  "decretos-legislativos": "Decretos Legislativos",
  "resolucoes": "Resoluções",
  "atos-mesa-diretora": "Atos da Mesa Diretora",
  "atos-presidencia": "Atos da Presidência",
  "portarias-mesa-diretora": "Portarias da Mesa Diretora",
  "portarias-presidencia": "Portarias da Presidência",
  "atas-sessoes-ordinarias": "Atas das Sessões Ordinárias",
  "atas-sessoes-extraordinarias": "Atas das Sessões Extraordinárias",
}

function DocumentosContent() {
  const searchParams = useSearchParams()
  const tipoParam = searchParams.get("tipo") ?? ""
  const tituloTipo = TIPOS_DOCUMENTOS[tipoParam] ?? "Documentos Oficiais"

  const [periodoInicio, setPeriodoInicio] = useState("")
  const [periodoFim, setPeriodoFim] = useState("")
  const [exercicio, setExercicio] = useState("")
  const [descricao, setDescricao] = useState("")
  const [numero, setNumero] = useState("")

  const handleLimpar = () => {
    setPeriodoInicio("")
    setPeriodoFim("")
    setExercicio("")
    setDescricao("")
    setNumero("")
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

              {/* Número */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Número</label>
                <input
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
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

        {/* Card Lista de Documentos */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              {tituloTipo}
            </h3>
          </div>
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <BsInboxFill className="text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 text-sm">
              Nenhum {tituloTipo.toLowerCase()} encontrado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Documentos() {
  return (
    <Suspense>
      <DocumentosContent />
    </Suspense>
  )
}
