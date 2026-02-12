import { FiExternalLink } from "react-icons/fi"

const TRANSPARENCIA_URL =
  "https://portaldatransparencia.publicsoft.com.br/sistemas/ContabilidadePublica/accessdirect.php?link=N9U5"

export default function Transparencia() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-semibold text-text-primary">
              Portal da Transparência
            </h3>
            <a
              href={TRANSPARENCIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Não consegue visualizar? Clique aqui
              <FiExternalLink size={14} />
            </a>
          </div>

          {/* Iframe */}
          <div className="p-4">
            <iframe
              src={TRANSPARENCIA_URL}
              title="Portal da Transparência - Câmara Municipal de Piancó"
              className="w-full rounded-lg shadow border-0"
              style={{ height: "145vh" }}
              allowFullScreen
            />
            <p className="text-center text-sm text-gray-500 mt-3">
              Para melhor visualização, acesse via desktop ou notebook.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
