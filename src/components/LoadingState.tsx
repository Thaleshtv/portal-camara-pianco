interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = "Carregando..." }: LoadingStateProps) {
  return (
    <div role="status" className="p-12 flex flex-col items-center justify-center text-center">
      <span className="w-10 h-10 mb-4 rounded-full border-4 border-gray-200 border-t-blue-primary animate-spin" aria-hidden="true" />
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  )
}
