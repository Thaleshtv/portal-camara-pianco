"use client"

import { useState } from "react"
import Link from "next/link"
import { BsClockFill, BsEyeFill, BsSearch, BsXCircle, BsDownload } from "react-icons/bs"

interface Lei {
  id: number
  tipo: string
  numero: string
  data: string
  ementa: string
}

const leisMock: Lei[] = [
  {
    id: 1,
    tipo: "LO",
    numero: "01/2023",
    data: "18/01/2023",
    ementa: "DISPÕE SOBRE A ORGANIZAÇÃO POLÍTICO-ADMINISTRATIVA DO MUNICÍPIO DE PIANCÓ, ESTADO DA PARAÍBA, E DÁ OUTRAS PROVIDÊNCIAS.",
  },
  {
    id: 2,
    tipo: "LO",
    numero: "02/2023",
    data: "25/04/2023",
    ementa: "ALTERA DISPOSITIVOS DA LEI ORGÂNICA MUNICIPAL, PARA ADEQUAÇÃO À LEGISLAÇÃO FEDERAL VIGENTE.",
  },
  {
    id: 3,
    tipo: "LO",
    numero: "03/2023",
    data: "12/07/2023",
    ementa: "DISPÕE SOBRE A ATUALIZAÇÃO DO REGIMENTO INTERNO DA CÂMARA MUNICIPAL DE PIANCÓ E DÁ OUTRAS PROVIDÊNCIAS.",
  },
]

export default function Leis() {
  const [periodoInicio, setPeriodoInicio] = useState("")
  const [periodoFim, setPeriodoFim] = useState("")
  const [tipo, setTipo] = useState("")
  const [exercicio, setExercicio] = useState("")
  const [descricao, setDescricao] = useState("")
  const [numero, setNumero] = useState("")

  const handleLimpar = () => {
    setPeriodoInicio("")
    setPeriodoFim("")
    setTipo("")
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

              {/* Tipo */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Tipo</label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="lo">Lei Orgânica</option>
                  <option value="lc">Lei Complementar</option>
                  <option value="lo">Lei Ordinária</option>
                  <option value="decreto">Decreto</option>
                  <option value="resolucao">Resolução</option>
                </select>
              </div>

              {/* Exercício */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Exercício</label>
                <input
                  type="text"
                  value={exercicio}
                  onChange={(e) => setExercicio(e.target.value)}
                  placeholder="Ex: 2023"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                />
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Descrição</label>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Buscar na descrição..."
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
                  placeholder="Ex: 01/2023"
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

        {/* Card Lista de Leis */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-semibold text-text-primary">
              Lista de LEI ORGÂNICA MUNICIPAL
              <span className="text-sm font-normal text-text-primary/60 ml-2">
                ({leisMock.length} registros encontrados)
              </span>
            </h3>
            <div className="text-text-primary text-sm flex items-center gap-1">
              <BsClockFill size={12} />
              <em>Informações atualizadas em: 06/05/2025 - 15:23:12</em>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {leisMock.map((lei) => (
                <div key={lei.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <Link
                        href={`/leis/${lei.id}`}
                        className="text-blue-primary font-bold uppercase text-sm hover:underline"
                      >
                        {lei.tipo} - {lei.numero}
                        <span className="font-normal italic text-xs text-text-primary/60 ml-2">
                          {lei.data}
                        </span>
                      </Link>
                      <p className="text-sm text-text-primary/70 mt-2">{lei.ementa}</p>
                    </div>
                    <Link
                      href={`/leis/${lei.id}`}
                      className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 self-start lg:self-center"
                    >
                      <BsEyeFill /> Acessar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
