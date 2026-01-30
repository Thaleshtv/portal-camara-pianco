"use client"

import { useRef } from "react"
import Link from "next/link"
import { BsPeopleFill, BsMegaphoneFill, BsFileTextFill, BsFileEarmarkPdfFill, BsPersonLinesFill, BsFilePdfFill, BsBoxArrowUpRight, BsCheckCircleFill, BsChevronLeft, BsChevronRight } from "react-icons/bs"

interface NewsItem {
  id: number
  slug: string
  image: string
  tag: string
  title: string
  description: string
  date: string
}

const news: NewsItem[] = [
  {
    id: 610,
    slug: "i-capacitacao-legislativa-e-administracao-municipa",
    image: "/fotos/610/Capa610.jpg",
    tag: "#Agenda",
    title: "I Capacitação Legislativa e Administração Municipal em Piancó",
    description: "Fortalecendo o conhecimento, qualificando a gestão e construindo o futuro das cidades",
    date: "2026-01-10",
  },
  {
    id: 609,
    slug: "camara-realiza-17-e-18-sessao-extraordinaria-e-apr",
    image: "/fotos/609/Capa609.jpg",
    tag: "#Sessão",
    title: "Câmara realiza 17ª e 18ª Sessão Extraordinária e aprova importante projeto para valorização dos agentes de saúde",
    description: "Projeto de Lei nº 47/2025 garante incentivo financeiro adicional aos Agentes Comunitários de Saúde e de Combate a Endemias para o ano de 2026",
    date: "2025-12-22",
  },
  {
    id: 608,
    slug: "unidade-e-modernidade-camara-de-pianco-aprova-novo",
    image: "/fotos/608/Capa608.jpg",
    tag: "#Sessão",
    title: "Unidade e Modernidade: Câmara de Piancó Aprova Novo Regimento Interno por Consenso",
    description: "Novo Regimento Interno entra em vigor nos primeiros dias de 2026",
    date: "2025-11-24",
  },
  {
    id: 607,
    slug: "camara-municipal-de-pianco-marca-presenca-no-1-enc",
    image: "/fotos/607/Capa607.jpg",
    tag: "#Informação",
    title: "Câmara Municipal de Piancó marca presença no 1º Encontro Municipalista da Paraíba",
    description: "Evento discutiu o fortalecimento da advocacia municipalista e a importância da boa gestão pública",
    date: "2025-11-11",
  },
  {
    id: 606,
    slug: "vereadores-iniciam-discussoes-sobre-o-novo-regimen",
    image: "/fotos/606/Capa606.jpg",
    tag: "#Reunião",
    title: "Vereadores iniciam discussões sobre o novo Regimento Interno da Câmara Municipal de Piancó",
    description: "Parlamentares e assessoria jurídica alinham proposta de modernização e atualização das normas internas da Casa Legislativa",
    date: "2025-11-06",
  },
  {
    id: 605,
    slug: "camara-municipal-de-pianco-realiza-19-sessao-ordin",
    image: "/fotos/605/Capa605.jpg",
    tag: "#Sessão",
    title: "Câmara Municipal de Piancó realiza 19ª Sessão Ordinária e entrega Título de Cidadão Piancoense",
    description: "Sessão foi marcada pela aprovação de matérias legislativas e pela homenagem a um cidadão que contribui para o fortalecimento do comércio local.",
    date: "2025-10-10",
  },
]

interface Vereador {
  id: number
  name: string
  role: string
  image: string
  sessoes: number
  materias: number
}

const vereadores: Vereador[] = [
  { id: 24, name: "Ney de Evandro", role: "Presidente", image: "/imagens/24.jpg", sessoes: 30, materias: 0 },
  { id: 6, name: "Geraldo Ferreira", role: "Vice Presidente", image: "/imagens/6.jpg", sessoes: 24, materias: 1 },
  { id: 25, name: "Edgar Valdevino", role: "1º Secretário", image: "/imagens/25.jpg", sessoes: 29, materias: 11 },
  { id: 39, name: "Lia da Educação", role: "2º Secretário", image: "/imagens/39.jpg", sessoes: 29, materias: 3 },
  { id: 3, name: "Christtianne Remîgio", role: "Vereador(a)", image: "/imagens/3.jpg", sessoes: 23, materias: 2 },
  { id: 42, name: "Ivanildo Avelino", role: "Vereador(a)", image: "/imagens/42.jpg", sessoes: 27, materias: 3 },
  { id: 41, name: "Joislene Lopes", role: "Vereador(a)", image: "/imagens/41.jpg", sessoes: 27, materias: 2 },
  { id: 40, name: "Marinês de Paula", role: "Vereador(a)", image: "/imagens/40.jpg", sessoes: 14, materias: 0 },
  { id: 20, name: "Neto Jj", role: "Vereador(a)", image: "/imagens/20.jpg", sessoes: 24, materias: 4 },
  { id: 43, name: "Rosimary Xavier", role: "Vereador(a)", image: "/imagens/43.jpg", sessoes: 28, materias: 2 },
  { id: 2, name: "Wallace Militão", role: "Vereador(a)", image: "/imagens/2.jpg", sessoes: 25, materias: 12 },
]

function VereadoresCarousel({ vereadores }: { vereadores: Vereador[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      {/* Seta Esquerda */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Anterior"
      >
        <BsChevronLeft size={20} className="text-text-primary" />
      </button>

      {/* Seta Direita */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Próximo"
      >
        <BsChevronRight size={20} className="text-text-primary" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6" style={{ minWidth: "max-content" }}>
          {vereadores.map((vereador) => (
            <div
              key={vereador.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm w-[350px] flex-shrink-0"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vereador.image}
                    alt={vereador.name}
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                  <div>
                    <Link href={`/vereadores/${vereador.id}`}>
                      <h4 className="font-semibold text-text-primary hover:text-blue-primary transition-colors flex items-center gap-1">
                        {vereador.name}
                        <BsCheckCircleFill className="text-green-500" size={14} />
                      </h4>
                    </Link>
                    <p className="text-xs text-text-primary/60">{vereador.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex bg-gray-50">
                <div className="flex-1 py-3 text-center">
                  <span className="font-bold">{vereador.sessoes}</span> Sessões
                </div>
                <div className="flex-1 py-3 text-center">
                  <span className="font-bold">{vereador.materias}</span> Matérias
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const quickLinks = [
  { href: "/parlamentares", icon: BsPersonLinesFill, label: "Vereadores" },
  { href: "/comissoes", icon: BsPeopleFill, label: "Comissões" },
  { href: "/sessao", icon: BsMegaphoneFill, label: "Sessões" },
  { href: "/materias", icon: BsFileTextFill, label: "Matérias" },
  { href: "/leis", icon: BsFilePdfFill, label: "Leis" },
  { href: "/publicacoes", icon: BsFileEarmarkPdfFill, label: "Publicações" },
]

export default function Home() {
  return (
    <>
      {/* Quick Links */}
      <section className="bg-[#D0DEEC] py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-blue-primary hover:bg-blue-primary/90 transition-colors rounded-lg"
              >
                <div className="flex items-center justify-center gap-2 px-5 py-4 text-white">
                  <link.icon size={20} />
                  <h6 className="text-sm font-medium">{link.label}</h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <a
              href="https://procuradoriadamulher.com.br/cmpianco"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/banner-procuradoria.png"
                alt="Procuradoria da Mulher"
                className="max-w-full h-auto rounded-lg"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium text-text-primary">Últimas notícias</h2>
            <Link
              href="/informa"
              className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
            >
              Mais notícias <BsBoxArrowUpRight size={14} />
            </Link>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="overflow-hidden">
                <Link href={`/informa/${item.id}/${item.slug}`} className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
                <div className="py-4">
                  <span className="text-blue-primary text-sm lowercase">{item.tag}</span>
                  <Link href={`/informa/${item.id}/${item.slug}`} className="block">
                    <h3 className="text-xl font-bold text-text-primary my-3 leading-tight hover:text-blue-primary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-text-primary/80 text-sm mb-3">{item.description}</p>
                  <span className="text-sm text-text-primary/60 block mb-3">{item.date}</span>
                  <Link
                    href={`/informa/${item.id}/${item.slug}`}
                    className="text-blue-primary font-bold text-xs hover:underline"
                  >
                    Continue lendo...
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Legislativo */}
      <section className="bg-[#D0DEEC] py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium text-text-primary">Legislativo</h2>
            <Link
              href="/parlamentares"
              className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
            >
              Mais sobre <BsBoxArrowUpRight size={14} />
            </Link>
          </div>

          {/* Vereadores Carousel */}
          <VereadoresCarousel vereadores={vereadores} />
        </div>
      </section>

      {/* Mapa */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.3737957274951!2d-37.92125390559997!3d-7.211787672578338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a5d33df5888ad7%3A0x36eeeeb2c0abd50!2sCAM%C3%81RA%20MUNICIPAL%20DE%20PIANC%C3%93%20PB!5e0!3m2!1spt-BR!2sbr!4v1586177619545!5m2!1spt-BR!2sbr"
        width="100%"
        height="150"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Rua Antônio Brasilino, 121 - Centro - CEP: 58765-000 - Piancó/PB"
      />
    </>
  )
}
