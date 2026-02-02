export default function PapelCamara() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">Papel da Câmara</h3>
          </div>
          <div className="p-6 space-y-6">
            {/* O que é a câmara? */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-3">O que é a câmara?</h4>
              <p className="text-justify text-[15px] leading-relaxed text-text-primary">
                Em primeiro plano, apresenta-se a função de representar os diversos segmentos e setores da sociedade, pois o vereador é um representante dos eleitores. A câmara municipal, portanto, deve reproduzir a diversidade de interesses, valores e ideologias da população da cidade.
              </p>
            </div>

            {/* Função legislativa */}
            <div>
              <p className="text-justify text-[15px] leading-relaxed text-text-primary">
                A câmara deverá produzir as leis e demais normas jurídicas que irão regular a vida em sociedade da população, observando os limites de atuação definidos na Constituição federal e as normas locais de interesse da comunidade. Entre essas normas, destaca-se a Lei Orgânica do município, que assume ares de Constituição municipal, e a Lei Orçamentária, que tem a função de disciplinar a utilização dos recursos financeiros do município.
              </p>
            </div>

            {/* Função fiscalizadora */}
            <div>
              <p className="text-justify text-[15px] leading-relaxed text-text-primary">
                Dada a importância do orçamento municipal na vida da cidade, fiscalizar e controlar a aplicação dos recursos reveste-se numa função vital atribuída às câmaras municipais. A função julgadora decorre da competência da câmara municipal em julgar o prefeito por crime de responsabilidade, o que poderá culminar na cassação do chefe do Poder Executivo. Além dessas funções, as câmaras municipais exercem uma série de ações indispensáveis na interação com a sociedade, muitas delas de forma combinada com as funções legislativa e fiscalizadora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
