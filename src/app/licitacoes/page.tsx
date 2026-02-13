"use client"

import { useState } from "react"
import { BsSearch, BsXCircle, BsDownload, BsFileEarmarkPdf } from "react-icons/bs"

export interface Licitacao {
  id: number
  numero: string
  modalidade: string
  objeto: string
  dataPublicacao: string
  status: string
  arquivos: { nome: string; url: string }[]
}

const licitacoes: Licitacao[] = [
  {
    id: 1,
    numero: "00001/2026",
    modalidade: "Dispensa de Licitação",
    objeto: "Locação",
    dataPublicacao: "12/02/2026",
    status: "Publicado",
    arquivos: [
      { nome: "Aviso de Dispensa 00001-2026 - Locação", url: "/documents/AVISO DE DISPENSA 00001-2026 LOCAÇÃO.pdf" },
      { nome: "Edital Dispensa 00001-2026 - Locação", url: "/documents/EDITAL DISPENSA 00001-2026 LOCAÇÃO.pdf" },
    ],
  },
  {
    id: 2,
    numero: "00002/2026",
    modalidade: "Dispensa de Licitação",
    objeto: "Combustível",
    dataPublicacao: "12/02/2026",
    status: "Publicado",
    arquivos: [
      { nome: "Aviso de Dispensa 00002-2026 - Combustível", url: "/documents/AVISO DE DISPENSA 00002-2026 COMBUSTIVEL(1).pdf" },
      { nome: "Edital Dispensa 00002-2026 - Combustível", url: "/documents/EDITAL DISPENSA 00002-2026 COMBUSTIVEL.pdf" },
    ],
  },
]

export default function Licitacoes() {
  const [periodoInicio, setPeriodoInicio] = useState("")
  const [periodoFim, setPeriodoFim] = useState("")
  const [modalidade, setModalidade] = useState("")
  const [exercicio, setExercicio] = useState("")
  const [objeto, setObjeto] = useState("")
  const [numero, setNumero] = useState("")

  const handleLimpar = () => {
    setPeriodoInicio("")
    setPeriodoFim("")
    setModalidade("")
    setExercicio("")
    setObjeto("")
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

              {/* Modalidade */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Modalidade</label>
                <select
                  value={modalidade}
                  onChange={(e) => setModalidade(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="pregao-eletronico">Pregão Eletrônico</option>
                  <option value="pregao-presencial">Pregão Presencial</option>
                  <option value="concorrencia">Concorrência</option>
                  <option value="tomada-precos">Tomada de Preços</option>
                  <option value="convite">Convite</option>
                  <option value="dispensa">Dispensa de Licitação</option>
                  <option value="inexigibilidade">Inexigibilidade</option>
                </select>
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

              {/* Objeto */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-primary mb-1">Objeto</label>
                <input
                  type="text"
                  value={objeto}
                  onChange={(e) => setObjeto(e.target.value)}
                  placeholder="Buscar no objeto..."
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

        {/* Card Lista de Licitações */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Licitações
              <span className="text-sm font-normal text-text-primary/60 ml-2">
                ({licitacoes.length} registros encontrados)
              </span>
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {licitacoes.map((licitacao) => (
                <div key={licitacao.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-blue-primary font-bold uppercase text-sm">
                        Dispensa Nº {licitacao.numero}
                        <span className="font-normal italic text-xs text-text-primary/60 ml-2">
                          Publicado em {licitacao.dataPublicacao}
                        </span>
                      </h4>
                      <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit">
                        {licitacao.status}
                      </span>
                    </div>
                    <div className="text-sm text-text-primary/70">
                      <strong>Modalidade:</strong> {licitacao.modalidade} &bull; <strong>Objeto:</strong> {licitacao.objeto}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {licitacao.arquivos.map((arquivo) => (
                        <a
                          key={arquivo.url}
                          href={arquivo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-red-50 text-red-700 hover:bg-red-100 text-xs font-medium px-3 py-2 rounded transition-colors"
                        >
                          <BsFileEarmarkPdf size={14} />
                          {arquivo.nome}
                        </a>
                      ))}
                    </div>
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
