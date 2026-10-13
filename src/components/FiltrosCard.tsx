"use client"

import { useId, type FormEvent } from "react"
import { BsDownload, BsSearch, BsXCircle } from "react-icons/bs"
import type { CampoFiltro, ControleFiltros } from "@/hooks/useFiltros"

interface FiltrosCardProps<T> {
  campos: CampoFiltro<T>[]
  controle: ControleFiltros<T>
  opcoes?: Record<string, string[]>
  onExportar: () => void
}

const inputClassName =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
const labelClassName = "block text-sm font-medium text-text-primary mb-1"

const LARGURAS: Record<NonNullable<CampoFiltro<unknown>["largura"]>, string> = {
  normal: "",
  dupla: "md:col-span-2",
  total: "md:col-span-2 lg:col-span-3",
}

export function FiltrosCard<T>({ campos, controle, opcoes = {}, onExportar }: FiltrosCardProps<T>) {
  const prefixo = useId()
  const { valores, alterar, pesquisar, limpar } = controle

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    pesquisar()
  }

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="border-b border-gray-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-text-primary">Filtros</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor={`${prefixo}-inicio`} className={labelClassName}>Período</label>
            <div className="flex gap-2">
              <input
                id={`${prefixo}-inicio`}
                type="date"
                aria-label="Data inicial"
                value={valores.inicio ?? ""}
                onChange={(e) => alterar("inicio", e.target.value)}
                className={`${inputClassName} flex-1 min-w-0`}
              />
              <input
                type="date"
                aria-label="Data final"
                value={valores.fim ?? ""}
                onChange={(e) => alterar("fim", e.target.value)}
                className={`${inputClassName} flex-1 min-w-0`}
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${prefixo}-exercicio`} className={labelClassName}>Exercício</label>
            <input
              id={`${prefixo}-exercicio`}
              type="text"
              inputMode="numeric"
              value={valores.exercicio ?? ""}
              onChange={(e) => alterar("exercicio", e.target.value)}
              placeholder="Ex: 2026"
              className={inputClassName}
            />
          </div>

          {campos.map((campo) => (
            <div key={campo.nome} className={LARGURAS[campo.largura ?? "normal"]}>
              <label htmlFor={`${prefixo}-${campo.nome}`} className={labelClassName}>{campo.label}</label>
              {campo.tipo === "selecao" ? (
                <select
                  id={`${prefixo}-${campo.nome}`}
                  value={valores[campo.nome] ?? ""}
                  onChange={(e) => alterar(campo.nome, e.target.value)}
                  className={inputClassName}
                >
                  <option value="">Selecione...</option>
                  {(opcoes[campo.nome] ?? []).map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={`${prefixo}-${campo.nome}`}
                  type="text"
                  value={valores[campo.nome] ?? ""}
                  onChange={(e) => alterar(campo.nome, e.target.value)}
                  placeholder={campo.placeholder}
                  className={inputClassName}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          <button
            type="submit"
            className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BsSearch /> PESQUISAR
          </button>
          <button
            type="button"
            onClick={limpar}
            className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BsXCircle /> LIMPAR
          </button>
          <button
            type="button"
            onClick={onExportar}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BsDownload /> EXPORTAÇÃO
          </button>
        </div>
      </form>
    </div>
  )
}
