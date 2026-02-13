"use client"

import Link from "next/link"
import {
  FiInfo,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiMail,
  FiHome,
  FiChevronDown
} from "react-icons/fi"
import Image from "next/image"

export function Menu() {

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
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10 cursor-pointer">
                INSTITUCIONAL <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[220px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/acamara" className="block px-4 py-2 hover:bg-gray-100">SOBRE A CÂMARA</Link></li>
                <li><Link href="/contatos" className="block px-4 py-2 hover:bg-gray-100">CONTATOS E ENDEREÇO</Link></li>
                <li><span className="block px-4 py-2 text-gray-400 cursor-not-allowed">OUVIDORIA</span></li>
                <li><span className="block px-4 py-2 text-gray-400 cursor-not-allowed">E-SIC</span></li>
                <li><Link href="/leis?car=11" className="block px-4 py-2 hover:bg-gray-100">LEI ORGÂNICA</Link></li>
                <li><Link href="/regimento-interno" className="block px-4 py-2 hover:bg-gray-100">REGIMENTO INTERNO</Link></li>
                <li><Link href="/dicionario" className="block px-4 py-2 hover:bg-gray-100">DICIONÁRIO LEGISLATIVO</Link></li>
                <li><Link href="/papel-vereador" className="block px-4 py-2 hover:bg-gray-100">PAPEL DO VEREADOR</Link></li>
                <li><Link href="/papel-camara" className="block px-4 py-2 hover:bg-gray-100">PAPEL DA CÂMARA</Link></li>
              </ul>
            </li>
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10 cursor-pointer">
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
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10 cursor-pointer">
                LEGISLATIVO <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[220px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/vereadores" className="block px-4 py-2 hover:bg-gray-100">GALERIA DE VEREADORES</Link></li>
                <li><Link href="/mesadiretora" className="block px-4 py-2 hover:bg-gray-100">MESA DIRETORA</Link></li>
                <li><Link href="/comissoes" className="block px-4 py-2 hover:bg-gray-100">COMISSÕES</Link></li>
                <li><span className="block px-4 py-2 text-gray-400 cursor-not-allowed">SESSÕES</span></li>
                <li><span className="block px-4 py-2 text-gray-400 cursor-not-allowed">LEGISLATURA</span></li>
              </ul>
            </li>
            {/* PROPOSIÇÕES E MATÉRIAS - oculto por enquanto */}
            <li className="group relative">
              <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10 cursor-pointer">
                TRANSPARÊNCIA <FiChevronDown size={12} />
              </button>
              <ul className="absolute top-full left-0 min-w-[300px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                <li><Link href="/acessoainformacao" className="block px-4 py-2 hover:bg-gray-100">PORTAL DA TRANSPARÊNCIA</Link></li>
                <li className="relative group/docs">
                  <span className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    DOCUMENTOS OFICIAIS <FiChevronDown size={12} className="-rotate-90" />
                  </span>
                  <ul className="absolute left-full top-0 min-w-[280px] bg-white text-text-primary shadow-lg z-50 hidden group-hover/docs:block">
                    <li><Link href="/documentos?tipo=decretos-legislativos" className="block px-4 py-2 hover:bg-gray-100">DECRETOS LEGISLATIVOS</Link></li>
                    <li><Link href="/documentos?tipo=resolucoes" className="block px-4 py-2 hover:bg-gray-100">RESOLUÇÕES</Link></li>
                    <li><Link href="/documentos?tipo=atos-mesa-diretora" className="block px-4 py-2 hover:bg-gray-100">ATOS DA MESA DIRETORA</Link></li>
                    <li><Link href="/documentos?tipo=atos-presidencia" className="block px-4 py-2 hover:bg-gray-100">ATOS DA PRESIDÊNCIA</Link></li>
                    <li><Link href="/documentos?tipo=portarias-mesa-diretora" className="block px-4 py-2 hover:bg-gray-100">PORTARIAS DA MESA DIRETORA</Link></li>
                    <li><Link href="/documentos?tipo=portarias-presidencia" className="block px-4 py-2 hover:bg-gray-100">PORTARIAS DA PRESIDÊNCIA</Link></li>
                    <li><Link href="/documentos?tipo=atas-sessoes-ordinarias" className="block px-4 py-2 hover:bg-gray-100">ATAS DAS SESSÕES ORDINÁRIAS</Link></li>
                    <li><Link href="/documentos?tipo=atas-sessoes-extraordinarias" className="block px-4 py-2 hover:bg-gray-100">ATAS DAS SESSÕES EXTRAORDINÁRIAS</Link></li>
                  </ul>
                </li>
                <li><Link href="/diario-oficial" className="block px-4 py-2 hover:bg-gray-100">DIÁRIO OFICIAL DO PODER LEGISLATIVO</Link></li>
                <li><Link href="/licitacoes" className="block px-4 py-2 hover:bg-gray-100">LICITAÇÕES</Link></li>
              </ul>
            </li>
            {/* INFORME - oculto por enquanto */}
          </ul>
        </div>
      </nav>
    </header>
  )
}
