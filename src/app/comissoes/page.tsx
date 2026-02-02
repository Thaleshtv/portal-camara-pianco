import Link from "next/link"
import { getComissoes } from "@/services"
import { BsEyeFill } from "react-icons/bs"

export default function Comissoes() {
  const comissoes = getComissoes()

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Lista de comissões
              <span className="text-sm font-normal text-text-primary/60 ml-2">
                <em>Foram encontradas {comissoes.length} comissões</em>
              </span>
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {comissoes.map((comissao) => (
                <div key={comissao.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <Link
                        href={`/comissoes/${comissao.id}`}
                        className="text-blue-primary font-bold uppercase text-sm hover:underline"
                      >
                        {comissao.name}
                      </Link>
                      <p className="text-sm text-text-primary/70 mt-1">{comissao.tipo}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {comissao.membros.map((img, idx) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={idx}
                            src={img}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover border-2 border-white"
                          />
                        ))}
                      </div>
                      <Link
                        href={`/comissoes/${comissao.id}`}
                        className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2"
                      >
                        <BsEyeFill /> Acessar
                      </Link>
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
