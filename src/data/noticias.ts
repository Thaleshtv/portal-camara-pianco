export interface Noticia {
  id: number
  slug: string
  image: string
  tag: string
  title: string
  description: string
  content: string
  date: string
}

export const noticias: Noticia[] = [
  {
    id: 610,
    slug: "i-capacitacao-legislativa-e-administracao-municipa",
    image: "/posts/capacitacao.png",
    tag: "#Agenda",
    title: "I Capacitação Legislativa e Administração Municipal em Piancó",
    description: "Fortalecendo o conhecimento, qualificando a gestão e construindo o futuro das cidades",
    content: `A Câmara Municipal de Piancó realizou a I Capacitação Legislativa e Administração Municipal, um evento voltado para o fortalecimento do conhecimento dos servidores e parlamentares sobre gestão pública e legislação.

O evento contou com a participação de especialistas na área de administração municipal, que abordaram temas como planejamento estratégico, transparência na gestão pública, e os desafios enfrentados pelos municípios brasileiros.

A capacitação teve como objetivo principal qualificar a gestão e construir o futuro das cidades, promovendo um espaço de aprendizado e troca de experiências entre os participantes.

Vereadores, assessores e servidores da Câmara Municipal participaram ativamente das palestras e debates, reforçando o compromisso do Legislativo piancoense com a qualificação contínua e a melhoria dos serviços prestados à população.`,
    date: "2026-01-10",
  },
]
