export interface SubMenuItem {
  href: string
  label: string
  disabled?: boolean
}

export interface MenuItem {
  label: string
  href?: string
  children?: SubMenuItem[]
  subMenu?: {
    label: string
    children: SubMenuItem[]
  }
}

export const menuItems: MenuItem[] = [
  {
    label: "INSTITUCIONAL",
    children: [
      { href: "/acamara", label: "SOBRE A CÂMARA" },
      { href: "/contatos", label: "CONTATOS E ENDEREÇO" },
      { href: "/estrutura-organizacional", label: "ESTRUTURA ORGANIZACIONAL" },
      { href: "/carta-de-servicos", label: "CARTA DE SERVIÇOS" },
      { href: "/ouvidoria", label: "OUVIDORIA" },
      { href: "/esic", label: "E-SIC" },
      { href: "/leis", label: "LEI ORGÂNICA" },
      { href: "/regimento-interno", label: "REGIMENTO INTERNO" },
      { href: "/dicionario", label: "DICIONÁRIO LEGISLATIVO" },
      { href: "/papel-vereador", label: "PAPEL DO VEREADOR" },
      { href: "/papel-camara", label: "PAPEL DA CÂMARA" },
    ],
  },
  {
    label: "PARLAMENTARES",
    children: [
      { href: "/vereadores/perfil?id=24", label: "EDNEY GEOVENNAZ CABRAL BARBOZA" },
      { href: "/vereadores/perfil?id=25", label: "EDGAR VALDEVINO LIMA" },
      { href: "/vereadores/perfil?id=39", label: "HELLIANY KENYA LOURENÇO DE ARAÚJO COSTA" },
      { href: "/vereadores/perfil?id=2", label: "ANTONIO WALLACE PEREIRA MILITÃO" },
      { href: "/vereadores/perfil?id=3", label: "CHRISTTIANNE VIRGINIA PALITOT REMÎGIO CARVALHO ALMEIDA" },
      { href: "/vereadores/perfil?id=42", label: "IVANILDO ALVELINO" },
      { href: "/vereadores/perfil?id=41", label: "JOISLENE LOPES DE SOUSA" },
      { href: "/vereadores/perfil?id=20", label: "JOSÉ SOARES DE SOUZA" },
      { href: "/vereadores/perfil?id=40", label: "MARINÊS DE PAULA DA SILVA NICOLAU" },
      { href: "/vereadores/perfil?id=43", label: "ROSIMARY XAVIER VIEIRA AMÂNCIO" },
      { href: "/vereadores/perfil?id=6", label: "GERALDO FERREIRA DE SOUZA" },
    ],
  },
  {
    label: "LEGISLATIVO",
    children: [
      { href: "/vereadores", label: "GALERIA DE VEREADORES" },
      { href: "/mesadiretora", label: "MESA DIRETORA" },
      { href: "/comissoes", label: "COMISSÕES" },
      { href: "/sessoes", label: "SESSÕES" },
      { href: "/sessoes#calendario", label: "CALENDÁRIO DE SESSÕES" },
      { href: "/sessoes#ordem-do-dia", label: "ORDEM DO DIA" },
      { href: "/legislatura", label: "LEGISLATURA" },
    ],
  },
  {
    label: "TRANSPARÊNCIA",
    children: [
      { href: "/acessoainformacao", label: "PORTAL DA TRANSPARÊNCIA" },
      { href: "/diario-oficial", label: "DIÁRIO OFICIAL DO PODER LEGISLATIVO" },
      { href: "/licitacoes", label: "LICITAÇÕES" },
    ],
    subMenu: {
      label: "DOCUMENTOS OFICIAIS",
      children: [
        { href: "/documentos?tipo=decretos-legislativos", label: "DECRETOS LEGISLATIVOS" },
        { href: "/documentos?tipo=resolucoes", label: "RESOLUÇÕES" },
        { href: "/documentos?tipo=atos-mesa-diretora", label: "ATOS DA MESA DIRETORA" },
        { href: "/documentos?tipo=atos-presidencia", label: "ATOS DA PRESIDÊNCIA" },
        { href: "/documentos?tipo=portarias-mesa-diretora", label: "PORTARIAS DA MESA DIRETORA" },
        { href: "/documentos?tipo=portarias-presidencia", label: "PORTARIAS DA PRESIDÊNCIA" },
        { href: "/documentos?tipo=atas-sessoes-ordinarias", label: "ATAS DAS SESSÕES ORDINÁRIAS" },
        { href: "/documentos?tipo=atas-sessoes-extraordinarias", label: "ATAS DAS SESSÕES EXTRAORDINÁRIAS" },
        { href: "/documentos?tipo=lei-organica-municipal", label: "LEI ORGÂNICA MUNICIPAL" },
      ],
    },
  },
]
