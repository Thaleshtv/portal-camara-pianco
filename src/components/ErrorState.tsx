import { BsExclamationTriangleFill } from "react-icons/bs"

interface ErrorStateProps {
  message?: string
}

export function ErrorState({ message = "Não foi possível carregar as informações. Tente novamente mais tarde." }: ErrorStateProps) {
  return (
    <div role="alert" className="p-12 flex flex-col items-center justify-center text-center">
      <BsExclamationTriangleFill className="text-amber-400 mb-4" size={48} />
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  )
}
