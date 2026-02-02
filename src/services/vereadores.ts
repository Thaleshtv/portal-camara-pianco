export interface Vereador {
  id: number
  name: string
  fullName: string
  role: string
  partido: string
  email: string | null
  telefone: string | null
  image: string
  sessoes: number
  materias: number
}

const vereadores: Vereador[] = [
  {
    id: 24,
    name: "Ney de Evandro",
    fullName: "Edney Geovennaz Cabral Barboza",
    role: "Presidente",
    partido: "PSD",
    email: null,
    telefone: "(83) 9919-0209",
    image: "/imagens/24.jpg",
    sessoes: 30,
    materias: 0,
  },
  {
    id: 6,
    name: "Geraldo Ferreira",
    fullName: "Geraldo Ferreira de Souza",
    role: "Vice Presidente",
    partido: "PP",
    email: "geraldoferreiradesouza03@outlook.com",
    telefone: null,
    image: "/imagens/6.jpg",
    sessoes: 24,
    materias: 1,
  },
  {
    id: 25,
    name: "Edgar Valdevino",
    fullName: "Edgar Valdevino Lima",
    role: "1º Secretário",
    partido: "PP",
    email: "edgarvaldevino@hotmail.com",
    telefone: "(83) 9829-6460",
    image: "/imagens/25.jpg",
    sessoes: 29,
    materias: 11,
  },
  {
    id: 39,
    name: "Lia da Educação",
    fullName: "Helliany Kenya Lourenço de Araújo Costa",
    role: "2º Secretário",
    partido: "PSD",
    email: null,
    telefone: null,
    image: "/imagens/39.jpg",
    sessoes: 29,
    materias: 3,
  },
  {
    id: 3,
    name: "Christtianne Remîgio",
    fullName: "Christtianne Virginia Palitot Remîgio Carvalho Almeida",
    role: "Vereador(a)",
    partido: "REP",
    email: "cvpremigio@gmail.com",
    telefone: null,
    image: "/imagens/3.jpg",
    sessoes: 23,
    materias: 2,
  },
  {
    id: 42,
    name: "Ivanildo Avelino",
    fullName: "Ivanildo Alvelino",
    role: "Vereador(a)",
    partido: "REP",
    email: null,
    telefone: null,
    image: "/imagens/42.jpg",
    sessoes: 27,
    materias: 3,
  },
  {
    id: 41,
    name: "Joislene Lopes",
    fullName: "Joislene Lopes de Sousa",
    role: "Vereador(a)",
    partido: "PP",
    email: null,
    telefone: null,
    image: "/imagens/41.jpg",
    sessoes: 27,
    materias: 2,
  },
  {
    id: 40,
    name: "Marinês de Paula",
    fullName: "Marinês de Paula da Silva Nicolau",
    role: "Vereador(a)",
    partido: "REP",
    email: null,
    telefone: null,
    image: "/imagens/40.jpg",
    sessoes: 14,
    materias: 0,
  },
  {
    id: 20,
    name: "Neto Jj",
    fullName: "José Soares de Souza",
    role: "Vereador(a)",
    partido: "PSD",
    email: "nettosoares25@gmail.com",
    telefone: "(61) 9913-1193",
    image: "/imagens/20.jpg",
    sessoes: 24,
    materias: 4,
  },
  {
    id: 43,
    name: "Rosimary Xavier",
    fullName: "Rosimary Xavier Vieira Amâncio",
    role: "Vereador(a)",
    partido: "PSD",
    email: null,
    telefone: null,
    image: "/imagens/43.jpg",
    sessoes: 28,
    materias: 2,
  },
  {
    id: 2,
    name: "Wallace Militão",
    fullName: "Antonio Wallace Pereira Militão",
    role: "Vereador(a)",
    partido: "PP",
    email: "wallace.militao@yahoo.com.br",
    telefone: "(83) 9930-3989",
    image: "/imagens/2.jpg",
    sessoes: 25,
    materias: 12,
  },
]

export function getVereadores(): Vereador[] {
  return vereadores
}

export function getVereadorById(id: number): Vereador | undefined {
  return vereadores.find((v) => v.id === id)
}

export function getMesaDiretora(): Vereador[] {
  const cargos = ["Presidente", "Vice Presidente", "1º Secretário", "2º Secretário"]
  return vereadores.filter((v) => cargos.includes(v.role))
}

export function getVereadoresComuns(): Vereador[] {
  return vereadores.filter((v) => v.role === "Vereador(a)")
}
