import Link from "next/link"
import { getVereadores } from "@/services"

export default function Vereadores() {
  const vereadores = getVereadores()

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Lista de vereadores
              <span className="text-sm font-normal text-text-primary/60 ml-2">
                <em>Foram encontrados {vereadores.length} registros</em>
              </span>
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vereadores.map((vereador) => (
                <Link
                  key={vereador.id}
                  href={`/vereadores/${vereador.id}`}
                  className="block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={vereador.image}
                          alt={vereador.name}
                          className="w-[70px] h-[70px] rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-text-primary hover:text-blue-primary transition-colors">
                            {vereador.name}
                          </h4>
                          <p className="text-xs text-text-primary/60">{vereador.fullName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
