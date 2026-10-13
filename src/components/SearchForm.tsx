"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { BsSearch } from "react-icons/bs"

interface SearchFormProps {
  initialValue?: string
  className?: string
}

export function SearchForm({ initialValue = "", className = "" }: SearchFormProps) {
  const router = useRouter()
  const [termo, setTermo] = useState(initialValue)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/busca?q=${encodeURIComponent(termo.trim())}`)
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={`flex ${className}`}>
      <label htmlFor="busca-termo" className="sr-only">Pesquisar no portal</label>
      <input
        id="busca-termo"
        type="search"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar..."
        className="flex-1 min-w-0 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
      />
      <button
        type="submit"
        aria-label="Pesquisar"
        className="bg-blue-primary text-white px-4 rounded-r hover:bg-blue-primary/90 transition-colors cursor-pointer"
      >
        <BsSearch size={16} />
      </button>
    </form>
  )
}
