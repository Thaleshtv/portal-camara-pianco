"use client"

import { useState } from "react"
import { BsChevronRight } from "react-icons/bs"

interface Termo {
  termo: string
  definicao: string
}

const termos: Termo[] = [
  {
    termo: "Abstenção",
    definicao: "Na Câmara, o vereador pode se recusar a votar uma proposição. É como um voto \"em branco\". Não tem efeito no resultado final da votação.",
  },
  {
    termo: "Adiamento",
    definicao: "É quando a deliberação de uma proposição é adiada para uma data posterior. O adiamento da votação depende da aprovação do plenário e só pode ser proposto por tempo determinado. Quando a proposição tramita em regime de urgência, o pedido de adiamento não é permitido.",
  },
  {
    termo: "Administração Direta",
    definicao: "Área da administração pública vinculada diretamente ao Poder Executivo. No caso do município, é estruturada a partir das secretarias municipais, podendo ser criadas administrações regionais.",
  },
  {
    termo: "Administração Indireta",
    definicao: "Compreende serviços instituídos para limitar a expansão da administração direta. Possui independência funcional. Compreende as autarquias, fundações públicas, sociedades de economia mista, empresas públicas e fundações estatais.",
  },
  {
    termo: "Administração Pública",
    definicao: "Instrumento de ação do Estado, estabelecido com o propósito de possibilitar o cumprimento de suas funções básicas, como a prestação dos serviços indispensáveis à satisfação das necessidades coletivas.",
  },
  {
    termo: "Admissibilidade",
    definicao: "Na Câmara, é quando a Comissão de Legislação, Justiça e Redação aceita a tramitação de uma proposição, após analisar a constitucionalidade e conformidade com a Lei Orgânica do Município (LOM) e Regimento Interno.",
  },
  {
    termo: "Ajuste",
    definicao: "Instrumento pelo qual um órgão público transfere a outro a execução de projetos e atividades constantes de seu programa de trabalho.",
  },
  {
    termo: "Alocação",
    definicao: "Destinação de recurso orçamentário a um fim específico ou a uma entidade.",
  },
  {
    termo: "Anais",
    definicao: "Publicação periódica oficial da Câmara que reúne os registros das decisões legislativas e pronunciamentos dos parlamentares.",
  },
  {
    termo: "Anteprojeto",
    definicao: "Proposta, versão preliminar de um texto não apresentado formalmente como proposição à Casa Legislativa.",
  },
  {
    termo: "Aparte",
    definicao: "Interrupção da fala de um orador. É quando um parlamentar intervém na fala de outro membro da Casa para perguntar, esclarecer ou contestar o pronunciamento.",
  },
  {
    termo: "Arquivamento",
    definicao: "Recolhimento das proposições ao arquivo da Câmara. Ocorre quando as matérias foram rejeitadas definitivamente, declaradas prejudicadas ou quando estiverem em tramitação no encerramento da legislatura.",
  },
  {
    termo: "Ata",
    definicao: "Registro escrito do que acontece nas sessões plenárias e reuniões de comissões da Câmara Municipal. As atas resumidas das sessões plenárias podem ser consultadas no site oficial do Legislativo, sendo também publicadas em Órgão Oficial do Município.",
  },
  {
    termo: "Atividade Parlamentar",
    definicao: "É toda atividade pertinente ao mandato parlamentar.",
  },
  {
    termo: "Ato da Mesa",
    definicao: "Ato normativo editado pela Mesa Executiva da Câmara sobre matéria de sua competência.",
  },
  {
    termo: "Audiência Pública",
    definicao: "Os vereadores se reúnem em audiência com cidadãos, órgãos e entidades para informar sobre proposição em tramitação ou para tratar de assunto de interesse público. A audiência pública é realizada após aprovação de requerimento em plenário.",
  },
  {
    termo: "Bancada Parlamentar",
    definicao: "Bancadas são representações partidárias eleitas em cada Legislatura. Cada bancada tem um líder e, no máximo, dois vice-líderes, que devem ser indicados à Mesa Executiva no início de cada sessão legislativa.",
  },
  {
    termo: "Bloco Parlamentar",
    definicao: "As bancadas de dois ou mais partidos podem formar um bloco parlamentar, que deve, obrigatoriamente, ter mais de dois vereadores. As bancadas que integram o bloco não podem fazer parte de outro. Na eleição da Mesa Executiva está assegurada, tanto quanto possível, a representação proporcional dos partidos e blocos com cadeira na Casa. O mesmo ocorre na formação das comissões permanentes e temporárias.",
  },
  {
    termo: "Cassação",
    definicao: "Quando o vereador perde o seu mandato. Ocorre quando o parlamentar age contra o decoro parlamentar, perde seus direitos políticos, é condenado criminalmente em sentença transitada em julgado ou falta a terça parte das sessões ordinárias (se não tiver licença ou em missão autorizada pela Câmara).",
  },
  {
    termo: "Censura ao parlamentar",
    definicao: "Medida disciplinar aplicada ao vereador que comete infrações ético disciplinares, como deixar de observar as normas do Regimento Interno, perturbar a ordem das sessões ou praticar ofensa moral. A censura pública ou repreensão é decidida pelo Conselho de Ética e Decoro Parlamentar. O ato deve ser publicado em jornal diário de grande circulação no município.",
  },
  {
    termo: "Chamada",
    definicao: "Realizada em cada sessão plenária, para verificar quais e quantos são os vereadores presentes. É considerado presente no plenário aquele parlamentar que assinar a folha de presença, participar da votação das proposições e permanecer no plenário até o encerramento do Grande Expediente.",
  },
  {
    termo: "Código de Ética e Decoro Parlamentar",
    definicao: "Norma, anexa ao Regimento Interno da Casa, que estabelece os princípios éticos e regras do decoro que orientam a conduta do vereador. O exercício do mandato exige conduta digna e compatível com os preceitos deste código.",
  },
  {
    termo: "Cofre Público",
    definicao: "Tesouro Público, podendo significar parcela da administração pública incumbida da guarda e movimentação do dinheiro público.",
  },
  {
    termo: "Colégio Eleitoral",
    definicao: "Conjunto de eleitores de determinada circunscrição ou parte dela, de uma cidade, um distrito, um bairro.",
  },
  {
    termo: "Coligação Eleitoral",
    definicao: "Aliança entre dois ou mais partidos, que passam a funcionar como uma só agremiação partidária no processo eleitoral.",
  },
  {
    termo: "Comissão de Representação",
    definicao: "Tipo de comissão temporária. Constituída para representar a Câmara em atos externos.",
  },
  {
    termo: "Comissão Especial",
    definicao: "Comissão temporária destinada ao estudo da reforma/alteração do Regimento Interno ou da Lei Orgânica do Município, ao estudo de problemas municipais ou à tomada de posição pela Câmara em assuntos de reconhecida relevância.",
  },
  {
    termo: "Comissão Executiva",
    definicao: "Comissão formada pelo presidente da Casa, 1° e 2° secretários. Sua função é elaborar projetos de lei que tratem da organização da Câmara. Também compete à Comissão Executiva nomear, promover, conceder gratificações ou licenças, ou exonerar servidores.",
  },
  {
    termo: "Comissão Parlamentar de Inquérito",
    definicao: "É uma comissão temporária com o poder de investigação próprio das autoridades judiciais, além de outros previstos no Regimento Interno da Câmara Municipal.",
  },
  {
    termo: "Comissão Permanente",
    definicao: "Órgão técnico-legislativo que tem a função de apreciar assuntos e proposições submetidas ao seu exame de acordo com o tema. A Câmara possui quatro comissões permanentes: Legislação, Obras e Serviços Públicos; Finanças e Orçamento; Justiça e Redação e Leis; e Ética Parlamentar.",
  },
]

const ITEMS_PER_PAGE = 10

export default function Dicionario() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(termos.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentTermos = termos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Dicionário Legislativo</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {currentTermos.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                    <h4 className="font-semibold text-text-primary uppercase">{item.termo}</h4>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-text-primary/80">{item.definicao}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-end mt-6">
              <nav className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded text-sm cursor-pointer transition-colors ${
                      currentPage === page
                        ? "bg-blue-primary text-white"
                        : "bg-gray-100 text-text-primary hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-3 py-1 rounded text-sm bg-gray-100 text-text-primary hover:bg-gray-200 cursor-pointer transition-colors flex items-center gap-1"
                  >
                    Próximo <BsChevronRight size={12} />
                  </button>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
