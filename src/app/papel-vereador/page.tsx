export default function PapelVereador() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Papel do Vereador</h3>
          </div>
          <div className="p-6 space-y-8">
            {/* O que é um vereador? */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">O que é um vereador?</h4>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary">
                O vereador é um agente político, eleito para sua função pelo voto direto e secreto da população. Ele trabalha no{" "}
                <em className="text-blue-primary">Poder Legislativo</em> da esfera municipal da federação brasileira (o Brasil é uma federação composta por três esferas de poder: União, Estados e Municípios). Assim, o vereador tem um papel equivalente ao que deputados e senadores possuem nas esferas mais amplas (Estados e União).
              </p>
            </div>

            {/* Papel do vereador */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">Papel do vereador</h4>
              <h5 className="font-semibold text-text-primary mb-2">QUAL É A PRINCIPAL FUNÇÃO DO VEREADOR?</h5>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary">
                Como integrante do Poder Legislativo municipal, o vereador tem como função primordial{" "}
                <strong>representar os interesses da população perante o poder público</strong>. Esse é (ou pelo menos deveria ser) o objetivo final de uma pessoa escolhida como representante do povo.
              </p>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                E como um vereador pode representar, na prática, os eleitores? Pode-se dizer que a atividade mais importante do dia a dia de um vereador é legislar. O que significa isso? Podemos entender pelo verbo legislar todas as ações relacionadas ao tratamento do corpo de leis que regem as ações do poder público e as relações sociais no nosso país. O Brasil tem como tradição fazer a regulação de assuntos importantes para a vida em sociedade por meio de leis escritas, seguindo princípios que remontam ao Direito Romano. É por isso que temos uma grande{" "}
                <em className="text-blue-primary">Constituição</em>, com centenas de artigos, parágrafos e alíneas. E não acaba por aí: a Constituição serve apenas para guiar as leis "menores", mais específicas, que dizem respeito a uma grande variedade de assuntos.
              </p>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                Dessa forma, podemos citar como ações típicas que estão ao alcance de um vereador criar, extinguir e emendar leis, da maneira que ele julgar que seja mais adequada ao interesse público.
              </p>
            </div>

            {/* Quais leis são trabalhadas pelo vereador? */}
            <div>
              <h5 className="font-semibold text-text-primary mb-2">QUAIS LEIS SÃO TRABALHADAS PELO VEREADOR?</h5>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary">
                OK, já entendemos que o vereador é um agente do Poder Legislativo e por isso tem a competência para cuidar das leis. Mas tem um detalhe muito importante:{" "}
                <strong>quais leis um vereador pode tratar?</strong> Ora, o mandato de vereador é restrito à esfera dos municípios. Portanto, faz todo sentido que as leis deliberadas, criadas, emendadas ou extintas pelos vereadores tenham efeitos{" "}
                <strong>exclusivos para os municípios a que eles pertencem</strong>.
              </p>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                Essa é a primeira pegadinha importante que queremos que você esteja atento na hora de escolher seu candidato: não adianta um vereador prometer que vai mudar leis que não sejam do âmbito do município. Ele simplesmente não terá competência para tratar sobre assuntos que digam respeito a mais de um município, ou a um estado inteiro, ou mesmo ao país inteiro.
              </p>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                Veja alguns exemplos de assuntos que podem ser tratados em lei por um vereador:
              </p>
              <ul className="list-disc list-inside text-[15px] font-light leading-relaxed text-text-primary mt-2 space-y-1 ml-4">
                <li>Mudança, criação ou extinção de <em className="text-blue-primary">tributos</em> municipais;</li>
                <li>Criação de bairros, distritos e subdistritos dentro do município;</li>
                <li>Estabelecer o chamado perímetro urbano (a área do município que é urbanizada);</li>
                <li>Sugerir nomes de ruas e avenidas;</li>
                <li>Aprovar os documentos orçamentários do município;</li>
                <li>Elaborar, deliberar e votar o <em className="text-blue-primary">Plano Diretor</em> municipal;</li>
                <li>Aprovar o plano municipal de educação;</li>
                <li>Estabelecer as regras de zoneamento, uso e ocupação do solo;</li>
                <li>Determinar o tombamento de prédios como patrimônio público, preservando a memória do município.</li>
              </ul>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                Ainda tem um detalhe importante: fique de olho em quais tipos de propostas são feitas pelo seu vereador. Não adianta um candidato prometer que vai criar leis que obviamente se chocam com as leis dos Estados, da União e da Constituição. Muito provavelmente esse projeto de lei nem será considerado dentro da{" "}
                <em className="text-blue-primary">Câmara de Vereadores</em>.
              </p>
            </div>

            {/* O papel de fiscalizar o prefeito */}
            <div>
              <h5 className="font-semibold text-text-primary mb-2">O PAPEL DE FISCALIZAR O PREFEITO</h5>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary">
                As atividades do vereador não podem ser resumidas apenas ao tratamento das leis do município. Existe ainda uma função ligada ao cargo de vereador que é fundamental para a própria saúde da nossa democracia. Trata-se da{" "}
                <strong>fiscalização das ações do Poder Executivo municipal – ou seja, das ações do prefeito</strong>. O ato de fiscalizar torna mais equilibradas as ações do Poder Executivo. Isso é essencial para que o poder do prefeito não se torne tão grande que o deixe acima da lei, como um monarca ou um ditador.
              </p>
              <p className="text-justify text-[15px] font-light leading-relaxed text-text-primary mt-3">
                É por isso que a lei prevê expressamente alguns deveres importantes dos vereadores em relação à prefeitura, como:
              </p>
              <ul className="list-disc list-inside text-[15px] font-light leading-relaxed text-text-primary mt-2 space-y-1 ml-4">
                <li>Fiscalizar as contas da prefeitura, de forma a inibir a existência de obras superfaturadas e atrasadas;</li>
                <li>Fiscalizar e controlar diretamente os atos do Poder Executivo, inclusive da administração indireta (por exemplo, visitar órgãos municipais e fazer questionamentos por escrito ao prefeito, que é obrigado por lei a prestar esclarecimentos em até 30 dias);</li>
                <li>Criar comissões parlamentares de inquérito;</li>
                <li>Realizar o chamado controle externo das contas públicas, com ajuda do Tribunal de Contas do Estado ou do Município responsável.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
