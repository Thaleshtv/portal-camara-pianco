import Link from "next/link"
import { getMesaDiretora } from "@/services"

export default function MesaDiretora() {
  const mesaDiretora = getMesaDiretora()

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Mesa Diretora</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mesaDiretora.map((membro) => (
                <Link
                  key={membro.id}
                  href={`/vereadores/${membro.id}`}
                  className="block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow text-center">
                    <div className="p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={membro.image}
                        alt={membro.name}
                        className="w-[120px] h-[120px] rounded-full object-cover mx-auto"
                      />
                      <h4 className="font-bold text-text-primary mt-4 hover:text-blue-primary transition-colors">
                        {membro.name}
                      </h4>
                      <p className="text-xs text-text-primary/60 mt-1">{membro.fullName}</p>
                      <p className="text-sm text-blue-primary font-medium mt-2">{membro.role}</p>
                      <p className="text-xs text-text-primary/60 mt-1">Partido: {membro.partido}</p>
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
