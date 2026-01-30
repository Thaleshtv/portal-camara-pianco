"use client"

import { useState } from "react"
import Link from "next/link"
import { BsSquareFill, BsFileTextFill, BsCheckCircleFill, BsEyeFill, BsPeopleFill, BsPersonFill } from "react-icons/bs"

const mesaDiretora = [
  { id: 24, name: "Ney de Evandro", role: "Presidente", image: "/imagens/24.jpg" },
  { id: 25, name: "Edgar Valdevino", role: "1º Secretário", image: "/imagens/25.jpg" },
  { id: 39, name: "Lia da Educação", role: "2º Secretário", image: "/imagens/39.jpg" },
  { id: 6, name: "Geraldo Ferreira", role: "Vice Presidente", image: "/imagens/6.jpg" },
]

const vereadores = [
  { id: 2, name: "Wallace Militão", role: "Vereador(a)", image: "/imagens/2.jpg" },
  { id: 3, name: "Christtianne Remîgio", role: "Vereador(a)", image: "/imagens/3.jpg" },
  { id: 42, name: "Ivanildo Avelino", role: "Vereador(a)", image: "/imagens/42.jpg" },
  { id: 41, name: "Joislene Lopes", role: "Vereador(a)", image: "/imagens/41.jpg" },
  { id: 20, name: "Neto Jj", role: "Vereador(a)", image: "/imagens/20.jpg" },
  { id: 40, name: "Marinês de Paula", role: "Vereador(a)", image: "/imagens/40.jpg" },
  { id: 43, name: "Rosimary Xavier", role: "Vereador(a)", image: "/imagens/43.jpg" },
]

const comissoes = [
  {
    id: 9,
    name: "Comissão de Educação, Cultura, Saúde e Defesa do Menor",
    tipo: "Permanente",
    membros: ["/imagens/39.jpg", "/imagens/41.jpg", "/imagens/42.jpg"],
  },
  {
    id: 10,
    name: "Comissão de Estudos da Seca e do Meio Ambiente",
    tipo: "Permanente",
    membros: ["/imagens/6.jpg", "/imagens/20.jpg", "/imagens/3.jpg"],
  },
  {
    id: 8,
    name: "Comissão de Fiscalização e Controle da Execução Orçamentária",
    tipo: "Permanente",
    membros: ["/imagens/2.jpg", "/imagens/43.jpg", "/imagens/40.jpg"],
  },
  {
    id: 7,
    name: "Comissão de Organização, Legislação e Justiça",
    tipo: "Permanente",
    membros: ["/imagens/25.jpg", "/imagens/20.jpg", "/imagens/42.jpg"],
  },
]

const decretos = [
  {
    id: 661,
    numero: "9/2025",
    data: "11/12/2025",
    ementa: "Dispõe sobre a concessão do Título de Cidadão Piancoense ao Senhor Fábio Brito Ferreira e adota outras providências",
  },
  {
    id: 605,
    numero: "8/2025",
    data: "04/09/2025",
    ementa: "Dispõe sobre a APROVAÇÃO DO PARECER PPL - TC - 080/2025, expedido pelo Tribunal de Contas do Estado da Paraíba (TCE/PB)",
  },
  {
    id: 598,
    numero: "7/2025",
    data: "28/08/2025",
    ementa: "Dispõe sobre a concessão do Título de Cidadão Piancoense a Senhora Anna Carla Lopes Correia Lima de Freitas e dá outras providências",
  },
]

const tabs = [
  { id: "mesa", label: "Mesa Diretora", icon: BsPeopleFill },
  { id: "vereadores", label: "Vereadores", icon: BsPersonFill },
  { id: "comissoes", label: "Comissões", icon: BsFileTextFill },
  { id: "decretos", label: "Projetos de Decretos Legislativos", icon: BsFileTextFill },
  { id: "normativos", label: "Normativos Próprios", icon: BsFileTextFill },
]

export default function ACamara() {
  const [activeTab, setActiveTab] = useState("mesa")

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Card Informações Institucionais */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Informações institucionais</h3>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Endereço:</strong>{" "}
                <span className="uppercase">Rua Antônio Brasilino, 121 - Centro - CEP: 58765000 - Piancó/PB</span>
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Horário:</strong>{" "}
                <span className="uppercase">de Segunda A Sexta das 08:00hs às 12:00hs</span>
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Telefone:</strong> (83) 9.8190-8882
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>E-mail:</strong> camaramunicipal@cmpianco.pb.gov.br
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Plenário:</strong> João Abilio de Sousa
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Quantidade de vereadores:</strong> 11
              </p>
              <p className="text-sm">
                <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                <strong>Quantidade de habitantes:</strong> 16.039
              </p>
            </div>

            {/* Botões de documentos */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/leis?car=15"
                className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2"
              >
                <BsFileTextFill /> Regimento interno
              </Link>
              <Link
                href="/leis?car=11"
                className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2"
              >
                <BsFileTextFill /> Lei orgânica
              </Link>
              <Link
                href="/leis?cat=99"
                className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2"
              >
                <BsFileTextFill /> Regime jurídico
              </Link>
              <Link
                href="/leis?car=38"
                className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2"
              >
                <BsFileTextFill /> Estrutura organizacional
              </Link>
            </div>
          </div>
        </div>

        {/* Card com Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs Header */}
          <div className="border-b overflow-x-auto">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "border-blue-primary text-blue-primary"
                      : "border-transparent text-text-primary/70 hover:text-text-primary"
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs Content */}
          <div className="p-6">
            {/* Mesa Diretora */}
            {activeTab === "mesa" && (
              <div>
                <h4 className="text-center font-bold mb-6">Lista de parlamentares da mesa diretora</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {mesaDiretora.map((membro) => (
                    <Link
                      key={membro.id}
                      href={`/vereadores/${membro.id}`}
                      className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={membro.image}
                          alt={membro.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-bold text-text-primary flex items-center gap-1">
                            {membro.name.toUpperCase()}
                            <BsCheckCircleFill className="text-green-500" size={14} />
                          </h5>
                          <p className="text-sm text-text-primary/70">{membro.role.toUpperCase()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Vereadores */}
            {activeTab === "vereadores" && (
              <div>
                <h4 className="text-center font-bold mb-6">Lista de vereadores</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {vereadores.map((vereador) => (
                    <Link
                      key={vereador.id}
                      href={`/vereadores/${vereador.id}`}
                      className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={vereador.image}
                          alt={vereador.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-bold text-text-primary flex items-center gap-1">
                            {vereador.name.toUpperCase()}
                            <BsCheckCircleFill className="text-green-500" size={14} />
                          </h5>
                          <p className="text-sm text-text-primary/70">{vereador.role.toUpperCase()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comissões */}
            {activeTab === "comissoes" && (
              <div>
                <h4 className="text-center font-bold mb-6">Lista de comissões</h4>
                <div className="space-y-4">
                  {comissoes.map((comissao) => (
                    <div key={comissao.id} className="bg-white border rounded-lg p-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <Link href={`/comissoes/${comissao.id}`} className="text-blue-primary font-bold uppercase text-sm hover:underline">
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
                <Link href="/comissoes" className="inline-block mt-4 bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors">
                  Mais sobre as comissões
                </Link>
              </div>
            )}

            {/* Decretos */}
            {activeTab === "decretos" && (
              <div>
                <h4 className="text-center font-bold mb-6">Últimos projetos de decretos legislativos</h4>
                <div className="space-y-4">
                  {decretos.map((decreto) => (
                    <div key={decreto.id} className="bg-white border rounded-lg p-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <Link href={`/materias/${decreto.id}`} className="text-blue-primary font-bold uppercase text-sm hover:underline">
                            Projeto de Decreto Legislativo - {decreto.numero}
                            <span className="font-normal italic text-xs text-text-primary/60 ml-2">
                              {decreto.data}
                            </span>
                          </Link>
                          <p className="text-sm text-text-primary/70 mt-2">{decreto.ementa}</p>
                        </div>
                        <Link
                          href={`/materias/${decreto.id}`}
                          className="bg-blue-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-primary/90 transition-colors flex items-center gap-2 self-start lg:self-center"
                        >
                          <BsEyeFill /> Acessar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Normativos Próprios */}
            {activeTab === "normativos" && (
              <div>
                <h4 className="text-center font-bold mb-6">Normativos Próprios</h4>
                <p className="text-center text-text-primary/70">Nenhum normativo encontrado.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
