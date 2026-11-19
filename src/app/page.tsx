"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import type { IconType } from "react-icons"
import { BsPeopleFill, BsMegaphoneFill, BsFileTextFill, BsFileEarmarkPdfFill, BsPersonLinesFill, BsFilePdfFill, BsBoxArrowUpRight, BsCheckCircleFill, BsChevronLeft, BsChevronRight, BsYoutube, BsInfoCircleFill, BsJournalText, BsBookFill, BsCalendarEventFill, BsPersonBadgeFill, BsDownload } from "react-icons/bs"
import { ConteudoRemoto } from "@/components/ConteudoRemoto"
import { NoticiasGrid } from "@/components/NoticiasGrid"
import { SITE } from "@/data/site"
import { useColecao } from "@/hooks/useApi"
import { formatarData } from "@/lib/formato"
import { tituloLicitacao } from "@/lib/licitacoes"
import { rotaLicitacao, rotaVereador } from "@/lib/rotas"
import type { Vereador } from "@/types/api"


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
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Anterior"
      >
        <BsChevronLeft size={20} className="text-text-primary" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Próximo"
      >
        <BsChevronRight size={20} className="text-text-primary" />
      </button>

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
                    <Link href={rotaVereador(vereador.id)}>
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

interface QuickLink {
  href: string
  icon: IconType
  label: string
  externo?: boolean
}

const quickLinks: QuickLink[] = [
  { href: "/vereadores", icon: BsPersonLinesFill, label: "Vereadores" },
  { href: "/comissoes", icon: BsPeopleFill, label: "Comissões" },
  { href: "/acessoainformacao", icon: BsFileTextFill, label: "Transparência" },
  { href: "/licitacoes", icon: BsFileEarmarkPdfFill, label: "Licitações" },
  { href: SITE.youtubeUrl, icon: BsYoutube, label: "Sessões ao Vivo", externo: true },
  { href: SITE.eLegislativoUrl, icon: BsBoxArrowUpRight, label: "E-Legislativo", externo: true },
  { href: "/esic", icon: BsInfoCircleFill, label: "E-SIC" },
  { href: "/ouvidoria", icon: BsMegaphoneFill, label: "Ouvidoria" },
  { href: "/mesadiretora", icon: BsPersonBadgeFill, label: "Mesa Diretora" },
  { href: "/sessoes#atas", icon: BsJournalText, label: "Atas de Sessões" },
  { href: "/sessoes#ordem-do-dia", icon: BsCalendarEventFill, label: "Ordem do Dia" },
  { href: "/leis", icon: BsBookFill, label: "Lei Orgânica" },
  { href: "/regimento-interno", icon: BsFilePdfFill, label: "Regimento Interno" },
]

const ITENS_POR_SECAO = 4
const NOTICIAS_NA_HOME = 6

export default function Home() {
  const diarios = useColecao("diarios")
  const licitacoes = useColecao("licitacoes")
  const vereadores = useColecao("vereadores")
  const ultimosDiarios = diarios.itens.slice(0, ITENS_POR_SECAO)
  const ultimasLicitacoes = licitacoes.itens.slice(0, ITENS_POR_SECAO)

  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="/assets/cidade-pianco.jpeg"
          alt="Vista da cidade de Piancó"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c3349]/95 via-[#14506f]/80 to-[#267EAD]/40" />
        <div className="relative container mx-auto px-4 pt-14 pb-28 lg:pt-20 lg:pb-36">
          <p className="text-white/80 text-sm lg:text-base uppercase tracking-[0.2em] mb-3">Portal oficial</p>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Câmara Municipal de Piancó
          </h1>
          <p className="text-white/85 text-base lg:text-lg mt-4 max-w-xl">
            Acompanhe as sessões, leis, publicações e o trabalho dos vereadores do Poder Legislativo de Piancó.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={SITE.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-primary font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              <BsYoutube size={18} /> Sessões ao vivo
            </a>
            <a
              href={SITE.eLegislativoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/70 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <BsBoxArrowUpRight size={16} /> Acessar o E-Legislativo
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 lg:-mt-24 pb-4">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4 px-1">Acesso rápido</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.externo ? "_blank" : undefined}
                  rel={link.externo ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center justify-center gap-2 text-center rounded-xl border border-gray-100 bg-[#F5F9FC] px-1.5 py-3 sm:px-2 sm:py-4 hover:border-blue-primary/30 hover:bg-white hover:shadow-md transition-all"
                >
                  <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-primary/10 text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-colors">
                    <link.icon size={20} />
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-text-primary leading-tight">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium text-text-primary">Últimas notícias</h2>
            <Link
              href="/informa"
              className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
            >
              Mais notícias <BsBoxArrowUpRight size={14} />
            </Link>
          </div>

          <NoticiasGrid limite={NOTICIAS_NA_HOME} />
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-text-primary">Diário Oficial</h2>
                <Link
                  href="/diario-oficial"
                  className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
                >
                  Todas as publicações <BsBoxArrowUpRight size={14} />
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ConteudoRemoto
                  carregando={diarios.carregando}
                  erro={diarios.erro}
                  vazio={ultimosDiarios.length === 0}
                  mensagemVazio="Nenhum diário oficial publicado."
                >
              <ul className="divide-y divide-gray-100">
                {ultimosDiarios.map((diario) => (
                  <li key={diario.id}>
                    <a
                      href={diario.arquivoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50"
                    >
                      <div>
                        <p className="font-semibold text-text-primary hover:text-blue-primary transition-colors">{diario.edicao}</p>
                        <span className="text-sm text-text-primary/60">{formatarData(diario.data)}</span>
                      </div>
                      <BsDownload className="text-blue-primary shrink-0" size={16} />
                    </a>
                  </li>
                ))}
              </ul>
                </ConteudoRemoto>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-text-primary">Últimas licitações</h2>
                <Link
                  href="/licitacoes"
                  className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
                >
                  Todas as licitações <BsBoxArrowUpRight size={14} />
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ConteudoRemoto
                  carregando={licitacoes.carregando}
                  erro={licitacoes.erro}
                  vazio={ultimasLicitacoes.length === 0}
                  mensagemVazio="Nenhuma licitação publicada."
                >
              <ul className="divide-y divide-gray-100">
                {ultimasLicitacoes.map((licitacao) => (
                  <li key={licitacao.id}>
                    <Link href={rotaLicitacao(licitacao.slug)} className="block px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-text-primary hover:text-blue-primary transition-colors">
                          {tituloLicitacao(licitacao)}
                        </p>
                        <span className="text-xs text-blue-primary shrink-0">{licitacao.situacao}</span>
                      </div>
                      <p className="text-sm text-text-primary/70 line-clamp-1">{licitacao.objeto}</p>
                    </Link>
                  </li>
                ))}
              </ul>
                </ConteudoRemoto>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D0DEEC] py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium text-text-primary">Legislativo</h2>
            <Link
              href="/vereadores"
              className="text-blue-primary font-semibold text-base flex items-center gap-1 hover:underline"
            >
              Mais sobre <BsBoxArrowUpRight size={14} />
            </Link>
          </div>

          <ConteudoRemoto
            carregando={vereadores.carregando}
            erro={vereadores.erro}
            vazio={vereadores.itens.length === 0}
            mensagemVazio="Nenhum vereador encontrado."
          >
            <VereadoresCarousel vereadores={vereadores.itens} />
          </ConteudoRemoto>
        </div>
      </section>

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
