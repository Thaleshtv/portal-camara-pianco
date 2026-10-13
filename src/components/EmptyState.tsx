import { BsInboxFill } from "react-icons/bs"

interface EmptyStateProps {
  message: string
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="p-12 flex flex-col items-center justify-center text-center">
      <BsInboxFill className="text-gray-300 mb-4" size={48} />
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  )
}
