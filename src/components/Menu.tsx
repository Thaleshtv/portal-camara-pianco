"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FiInfo,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiMail,
  FiHome,
  FiChevronDown,
  FiMenu,
  FiX,
  FiSearch
} from "react-icons/fi"
import Image from "next/image"
import { menuItems } from "@/data/menu"
import { paginasUtilitarias } from "@/data/paginasUtilitarias"
import { AccessibilityControls } from "@/components/AccessibilityControls"
import { SearchForm } from "@/components/SearchForm"

export function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    setExpandedMenus({})
  }

  return (
    <header>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-blue-primary focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
      >
        Ir para o conteúdo
      </a>
      {/* TopBar */}
      <div className="bg-blue-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[50px] text-[13px] text-white font-normal">
            {/* Links da esquerda */}
            <ul className="flex items-center gap-4 xl:gap-6">
              <li>
                <Link href="/acessoainformacao" className="flex items-center gap-1 hover:opacity-80">
                  <FiInfo size={14} />
                  <span className="hidden sm:inline">Transparência</span>
                </Link>
              </li>
              {paginasUtilitarias.map((pagina) => (
                <li key={pagina.href} className="hidden lg:block">
                  <Link href={pagina.href} className="hover:opacity-80">{pagina.label}</Link>
                </li>
              ))}
              <li>
                <AccessibilityControls />
              </li>
            </ul>

            {/* Redes Sociais */}
            <ul className="flex items-center gap-3 sm:gap-5">
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

      {/* Logo + Hamburger */}
      <div className="bg-white h-[100px] lg:h-[150px]">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Image
            src="/assets/logo-pianco.png"
            alt="Câmara Municipal de Piancó"
            width={200}
            height={100}
            className="object-contain h-[60px] lg:h-[80px] w-auto"
          />
          <SearchForm className="hidden lg:flex w-[320px]" />
          <div className="flex items-center lg:hidden">
            <Link
              href="/busca"
              className="p-2 text-text-primary hover:text-blue-primary transition-colors"
              aria-label="Pesquisar"
            >
              <FiSearch size={24} />
            </Link>
            {/* Botão Hamburger - Mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-text-primary hover:text-blue-primary transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Principal - Desktop */}
      <nav className="bg-blue-primary hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center h-[55px] text-white text-[13px] font-normal">
            <li>
              <Link href="/" className="flex items-center px-4 h-[55px] hover:bg-white/10">
                <FiHome size={16} />
              </Link>
            </li>
            {menuItems.map((item) => (
              <li key={item.label} className="group relative">
                <button className="flex items-center gap-1 px-4 h-[55px] hover:bg-white/10 cursor-pointer">
                  {item.label} <FiChevronDown size={12} />
                </button>
                {item.children && (
                  <ul className="absolute top-full left-0 min-w-[300px] bg-white text-text-primary shadow-lg z-50 hidden group-hover:block">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        {child.disabled ? (
                          <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">{child.label}</span>
                        ) : (
                          <Link href={child.href} className="block px-4 py-2 hover:bg-gray-100">{child.label}</Link>
                        )}
                      </li>
                    ))}
                    {/* Submenu Documentos Oficiais */}
                    {item.subMenu && (
                      <li className="relative group/docs">
                        <span className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {item.subMenu.label} <FiChevronDown size={12} className="-rotate-90" />
                        </span>
                        <ul className="absolute left-full top-0 min-w-[280px] bg-white text-text-primary shadow-lg z-50 hidden group-hover/docs:block">
                          {item.subMenu.children.map((subChild) => (
                            <li key={subChild.label}>
                              <Link href={subChild.href} className="block px-4 py-2 hover:bg-gray-100">{subChild.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar Mobile - Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header do Sidebar */}
        <div className="bg-blue-primary flex items-center justify-between px-4 py-4">
          <span className="text-white font-medium text-sm">Menu</span>
          <button
            onClick={closeSidebar}
            className="text-white hover:opacity-80 cursor-pointer"
            aria-label="Fechar menu"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Itens do Menu */}
        <nav className="py-2">
          {/* Home */}
          <Link
            href="/"
            onClick={closeSidebar}
            className="flex items-center gap-3 px-4 py-3 text-text-primary hover:bg-gray-100 text-sm font-medium"
          >
            <FiHome size={16} />
            INÍCIO
          </Link>

          {menuItems.map((item) => (
            <div key={item.label} className="border-t border-gray-100">
              {/* Item Principal */}
              <button
                onClick={() => toggleMenu(item.label)}
                className="w-full flex items-center justify-between px-4 py-3 text-text-primary hover:bg-gray-100 text-sm font-medium cursor-pointer"
              >
                {item.label}
                <FiChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    expandedMenus[item.label] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Sub-itens */}
              {expandedMenus[item.label] && item.children && (
                <div className="bg-gray-50">
                  {item.children.map((child) => (
                    <div key={child.label}>
                      {child.disabled ? (
                        <span className="block px-6 py-2.5 text-gray-400 text-xs cursor-not-allowed">
                          {child.label}
                        </span>
                      ) : (
                        <Link
                          href={child.href}
                          onClick={closeSidebar}
                          className="block px-6 py-2.5 text-text-primary/80 text-xs hover:bg-gray-200 hover:text-blue-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Submenu Documentos Oficiais - Mobile */}
                  {item.subMenu && (
                    <div>
                      <button
                        onClick={() => toggleMenu(item.subMenu!.label)}
                        className="w-full flex items-center justify-between px-6 py-2.5 text-text-primary/80 text-xs hover:bg-gray-200 cursor-pointer font-medium"
                      >
                        {item.subMenu.label}
                        <FiChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${
                            expandedMenus[item.subMenu.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMenus[item.subMenu.label] && (
                        <div className="bg-gray-100">
                          {item.subMenu.children.map((subChild) => (
                            <Link
                              key={subChild.label}
                              href={subChild.href}
                              onClick={closeSidebar}
                              className="block px-8 py-2 text-text-primary/70 text-xs hover:bg-gray-200 hover:text-blue-primary transition-colors"
                            >
                              {subChild.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-gray-100 py-2">
            {paginasUtilitarias.map((pagina) => (
              <Link
                key={pagina.href}
                href={pagina.href}
                onClick={closeSidebar}
                className="block px-4 py-2 text-text-primary/80 text-xs hover:bg-gray-100 hover:text-blue-primary transition-colors"
              >
                {pagina.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Redes Sociais no Sidebar */}
          <div className="border-t border-gray-100 px-4 py-4 mt-2">
            <p className="text-xs text-text-primary/60 mb-3 font-medium">REDES SOCIAIS</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/camaramunicipaldepianco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-primary hover:opacity-80"
              >
                <FiFacebook size={22} />
              </a>
              <a
                href="https://www.youtube.com/@piancocamaramunicipal6187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:opacity-80"
              >
                <FiYoutube size={22} />
              </a>
              <a
                href="https://www.instagram.com/camaradepianco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:opacity-80"
              >
                <FiInstagram size={22} />
              </a>
              <a
                href="https://webmail-seguro.com.br/cmpianco.pb.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-primary hover:opacity-80"
              >
                <FiMail size={22} />
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </header>
  )
}
