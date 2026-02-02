import { BsSquareFill, BsClockFill } from "react-icons/bs"

export default function Contato() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Card Lista de Contatos */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-semibold text-text-primary">Lista de contatos</h3>
            <div className="text-text-primary text-sm flex items-center gap-1">
              <BsClockFill size={12} />
              <em>Informações atualizadas em: 06/05/2025 - 15:23:12</em>
            </div>
          </div>
          <div className="p-6">
            {/* Card Câmara Municipal */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-text-primary uppercase">Câmara Municipal de Piancó</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="text-sm">
                    <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                    <strong>Endereço:</strong> RUA ANTÔNIO BRASILINO, N.121 - CENTRO
                  </li>
                  <li className="text-sm">
                    <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                    <strong>E-mail:</strong> camaramunicipal@cmpianco.pb.gov.br
                  </li>
                  <li className="text-sm">
                    <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                    <strong>Telefones:</strong> (83) 9819-08882
                  </li>
                  <li className="text-sm">
                    <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
                    <strong>Horário de Atendimento ao público:</strong> DE SEGUNDA À SEXTA DAS 08:00HS ÀS 12:00HS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
