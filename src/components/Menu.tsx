"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FiInfo,
  FiHeadphones,
  FiSearch,
  FiSmile,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiMail,
  FiToggleRight,
  FiPlusSquare,
  FiMinusSquare,
  FiHome,
  FiChevronDown
} from "react-icons/fi"
import { BiSitemap, BiHandicap } from "react-icons/bi"
import Image from "next/image"

export function Menu() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false)

  return (
    <header>
      {/* TopBar */}
      <div className="bg-blue-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[50px] text-[13px] text-white font-normal">
            {/* Links da esquerda */}
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/acessoainformacao" className="flex items-center gap-1 hover:opacity-80">
                  <FiInfo size={14} />
                  <span className="hidden sm:inline">Transparência</span>
                </Link>
              </li>

              <li>
                <Link href="/ouvidoria" className="flex items-center gap-1 hover:opacity-80">
                  <FiHeadphones size={14} />
                  <span className="hidden sm:inline">Ouvidoria/e-Sic</span>
                </Link>
              </li>

              <li>
                <Link href="/pesquisa" className="flex items-center gap-1 hover:opacity-80">
                  <FiSearch size={14} />
                  <span className="hidden sm:inline">Pesquisa</span>
                </Link>
              </li>

              <li className="relative">
                <button
                  onClick={() => setAccessibilityOpen(!accessibilityOpen)}
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  <FiSmile size={14} />
                  <span className="hidden sm:inline">Acessibilidade</span>
                </button>

                {accessibilityOpen && (
                  <ul className="absolute top-full left-0 mt-1 min-w-[150px] bg-white text-text-primary rounded shadow-lg z-50 font-normal">
                    <li>
                      <Link
                        href="/acessibilidade"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <FiSmile size={14} />
                        <span>Sobre</span>
                      </Link>
                    </li>
                    <li>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                        <FiToggleRight size={14} />
                        <span><u>C</u>ontraste</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                        <FiPlusSquare size={14} />
                        <span><u>A</u>umentar</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                        <FiMinusSquare size={14} />
                        <span><u>D</u>iminuir</span>
                      </button>
                    </li>
                    <li>
                      <a
                        href="https://www.gov.br/governodigital/pt-br/vlibras"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <BiHandicap size={14} />
                        <span>Libras</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/mapadosite"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <BiSitemap size={14} />
                        <span>Mapa do site</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Redes Sociais */}
            <ul className="flex items-center gap-5">
              <li>
                <a
                  href="https://www.facebook.com/camaramunicipaldepianco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FiFacebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@piancocamaramunicipal6187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FiYoutube size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/camaradepianco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FiInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://webmail-seguro.com.br/cmpianco.pb.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FiMail size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="bg-white h-[150px]">
        <div className="container mx-auto px-4 h-full flex items-center">
          <Image
            src="/assets/logo-pianco.png"
            alt="Câmara Municipal de Piancó"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Menu Principal */}
      <nav className="bg-blue-primary">
        <div className="container mx-auto px-4">
          <ul className="flex items-center h-[55px] text-white text-[13px] font-normal">
            <li>
              <Link href="/" className="flex items-center px-4 h-[55px] hover:bg-white/10">
                <FiHome size={16} />
              </Link>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10">
                INSTITUCIONAL <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[220px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/acamara" className="block px-4 py-2 hover:bg-gray-100">SOBRE A CÂMARA</Link></li>
                <li><Link href="/contatos" className="block px-4 py-2 hover:bg-gray-100">CONTATOS E ENDEREÇO</Link></li>
                <li><Link href="/ouvidoria" className="block px-4 py-2 hover:bg-gray-100">OUVIDORIA</Link></li>
                <li><Link href="/sic" className="block px-4 py-2 hover:bg-gray-100">E-SIC</Link></li>
                <li><Link href="/leis?car=11" className="block px-4 py-2 hover:bg-gray-100">LEI ORGÂNICA</Link></li>
                <li><Link href="/regimento-interno" className="block px-4 py-2 hover:bg-gray-100">REGIMENTO INTERNO</Link></li>
                <li><Link href="/dicionario" className="block px-4 py-2 hover:bg-gray-100">DICIONÁRIO LEGISLATIVO</Link></li>
                <li><Link href="/papel-vereador" className="block px-4 py-2 hover:bg-gray-100">PAPEL DO VEREADOR</Link></li>
                <li><Link href="/papel-camara" className="block px-4 py-2 hover:bg-gray-100">PAPEL DA CÂMARA</Link></li>
              </ul>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10">
                PARLAMENTARES <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[320px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/vereadores/24" className="block px-4 py-2 hover:bg-gray-100">EDNEY GEOVENNAZ CABRAL BARBOZA</Link></li>
                <li><Link href="/vereadores/25" className="block px-4 py-2 hover:bg-gray-100">EDGAR VALDEVINO LIMA</Link></li>
                <li><Link href="/vereadores/39" className="block px-4 py-2 hover:bg-gray-100">HELLIANY KENYA LOURENÇO DE ARAÚJO COSTA</Link></li>
                <li><Link href="/vereadores/2" className="block px-4 py-2 hover:bg-gray-100">ANTONIO WALLACE PEREIRA MILITÃO</Link></li>
                <li><Link href="/vereadores/3" className="block px-4 py-2 hover:bg-gray-100">CHRISTTIANNE VIRGINIA PALITOT REMÎGIO CARVALHO ALMEIDA</Link></li>
                <li><Link href="/vereadores/42" className="block px-4 py-2 hover:bg-gray-100">IVANILDO ALVELINO</Link></li>
                <li><Link href="/vereadores/41" className="block px-4 py-2 hover:bg-gray-100">JOISLENE LOPES DE SOUSA</Link></li>
                <li><Link href="/vereadores/20" className="block px-4 py-2 hover:bg-gray-100">JOSÉ SOARES DE SOUZA</Link></li>
                <li><Link href="/vereadores/40" className="block px-4 py-2 hover:bg-gray-100">MARINÊS DE PAULA DA SILVA NICOLAU</Link></li>
                <li><Link href="/vereadores/43" className="block px-4 py-2 hover:bg-gray-100">ROSIMARY XAVIER VIEIRA AMÂNCIO</Link></li>
                <li><Link href="/vereadores/6" className="block px-4 py-2 hover:bg-gray-100">GERALDO FERREIRA DE SOUZA</Link></li>
              </ul>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10">
                LEGISLATIVO <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[220px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/vereadores" className="block px-4 py-2 hover:bg-gray-100">GALERIA DE VEREADORES</Link></li>
                <li><Link href="/mesadiretora" className="block px-4 py-2 hover:bg-gray-100">MESA DIRETORA</Link></li>
                <li><Link href="/comissoes" className="block px-4 py-2 hover:bg-gray-100">COMISSÕES</Link></li>
                <li><Link href="/sessao" className="block px-4 py-2 hover:bg-gray-100">SESSÕES</Link></li>
                <li><Link href="/legislaturas" className="block px-4 py-2 hover:bg-gray-100">LEGISLATURA</Link></li>
              </ul>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10">
                PROPOSIÇÕES E MATÉRIAS <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[280px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/materias?tipo=29" className="block px-4 py-2 hover:bg-gray-100">ATAS</Link></li>
                <li><Link href="/materias?tipo=3" className="block px-4 py-2 hover:bg-gray-100">MOÇÕES</Link></li>
                <li><Link href="/materias?tipo=11" className="block px-4 py-2 hover:bg-gray-100">PROJETO DE DECRETO DO LEGISLATIVO</Link></li>
                <li><Link href="/materias?tipo=7" className="block px-4 py-2 hover:bg-gray-100">PROJETO DE LEI ORDINÁRIA</Link></li>
                <li><Link href="/materias?tipo=9" className="block px-4 py-2 hover:bg-gray-100">PROJETO DE RESOLUÇÃO</Link></li>
                <li><Link href="/materias?tipo=1" className="block px-4 py-2 hover:bg-gray-100">REQUERIMENTO</Link></li>
                <li><Link href="/materias?tipo=26" className="block px-4 py-2 hover:bg-gray-100">VOTO DE PESAR</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/acessoainformacao" className="flex items-center px-4 h-[55px] hover:bg-white/10">
                TRANSPARÊNCIA
              </Link>
            </li>
            <li>
              <Link href="/lrf" className="flex items-center px-4 h-[55px] hover:bg-white/10">
                GESTÃO FISCAL
              </Link>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10">
                INFORME <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[180px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/noticias" className="block px-4 py-2 hover:bg-gray-100">NOTÍCIAS</Link></li>
                <li><Link href="/videos" className="block px-4 py-2 hover:bg-gray-100">VÍDEOS</Link></li>
                <li><Link href="/links" className="block px-4 py-2 hover:bg-gray-100">LINKS ÚTEIS</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
