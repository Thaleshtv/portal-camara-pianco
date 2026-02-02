import { notFound } from "next/navigation"
import Link from "next/link"
import { getVereadorById, getVereadores } from "@/services"
import { BsEnvelopeFill, BsTelephoneFill, BsArrowLeft } from "react-icons/bs"

interface VereadorPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const vereadores = getVereadores()
  return vereadores.map((v) => ({ id: String(v.id) }))
}

export default async function VereadorPage({ params }: VereadorPageProps) {
  const { id } = await params
  const vereador = getVereadorById(Number(id))

  if (!vereador) {
    notFound()
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Botão Voltar */}
        <Link
          href="/vereadores"
          className="inline-flex items-center gap-2 text-blue-primary hover:underline mb-6"
        >
          <BsArrowLeft /> Voltar para lista de vereadores
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Perfil do Vereador</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Foto */}
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={vereador.image}
                  alt={vereador.name}
                  className="w-[200px] h-[200px] rounded-lg object-cover mx-auto lg:mx-0"
                />
              </div>

              {/* Informações */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary">{vereador.name}</h2>
                <p className="text-text-primary/60 mt-1">{vereador.fullName}</p>

                <div className="mt-4 space-y-2">
                  <p className="text-sm">
                    <strong className="text-text-primary">Cargo:</strong>{" "}
                    <span className="text-text-primary/80">{vereador.role} - Mesa Diretora</span>
                  </p>
                  <p className="text-sm">
                    <strong className="text-text-primary">Partido:</strong>{" "}
                    <span className="text-text-primary/80">{vereador.partido}</span>
                  </p>

                  {vereador.email && (
                    <p className="text-sm flex items-center gap-2">
                      <BsEnvelopeFill className="text-blue-primary" />
                      <a href={`mailto:${vereador.email}`} className="text-blue-primary hover:underline">
                        {vereador.email}
                      </a>
                    </p>
                  )}

                  {vereador.telefone && (
                    <p className="text-sm flex items-center gap-2">
                      <BsTelephoneFill className="text-blue-primary" />
                      <a href={`tel:${vereador.telefone.replace(/\D/g, "")}`} className="text-blue-primary hover:underline">
                        {vereador.telefone}
                      </a>
                    </p>
                  )}
                </div>

                {/* Estatísticas */}
                <div className="mt-6 flex gap-4">
                  <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
                    <p className="text-2xl font-bold text-blue-primary">{vereador.sessoes}</p>
                    <p className="text-sm text-text-primary/60">Sessões</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
                    <p className="text-2xl font-bold text-blue-primary">{vereador.materias}</p>
                    <p className="text-sm text-text-primary/60">Matérias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
