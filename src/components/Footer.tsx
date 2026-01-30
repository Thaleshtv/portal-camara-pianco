import Link from "next/link"
import {
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiShield,
  FiUser
} from "react-icons/fi"
import { BsPostcard } from "react-icons/bs"

export function Footer() {
  return (
    <footer className="bg-blue-primary text-white">
      {/* Seção Principal */}
      <div className="border-b border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coluna 1 - Nome */}
            <div>
              <p className="text-white text-[15px] font-bold my-5">
                Câmara Municipal de Piancó
              </p>
            </div>

            {/* Coluna 2 - Legislatura */}
            <div>
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-center gap-2">
                  <FiShield size={14} />
                  <span>Legislatura 2025/2028</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiUser size={14} />
                  <span>Presidente Ney de Evandro</span>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Institucional */}
            <div>
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-center gap-2">
                  <BsPostcard size={14} />
                  <span>CNPJ: 08.560.781/0001-80</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin size={14} />
                  <span>Rua Antônio Brasilino, 121 - Centro, 58.765-000</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiClock size={14} />
                  <span>de Segunda a Sexta das 08:00hs às 12:00hs</span>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Contatos */}
            <div>
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-center gap-2">
                  <FiPhone size={14} />
                  <span>(83) 9.8190-8882</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiMail size={14} />
                  <span className="lowercase">camaramunicipal@cmpianco.pb.gov.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiClock size={14} />
                  <span>De Segunda à Sexta Das 08:00hs às 12:00hs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Redes Sociais e Copyright */}
      <div className="bg-blue-primary/90 py-4">
        <div className="container mx-auto px-4">
          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.facebook.com/camaramunicipaldepianco/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FiFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@piancocamaramunicipal6187"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FiYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/camaradepianco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://webmail-seguro.com.br/cmpianco.pb.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-[14px] text-white/80 py-4">
            © 2026 Câmara Municipal de Piancó
          </div>
        </div>
      </div>
    </footer>
  )
}
