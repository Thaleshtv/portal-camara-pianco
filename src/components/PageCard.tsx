import type { ReactNode } from "react"

interface PageCardProps {
  title: string
  id?: string
  action?: ReactNode
  children: ReactNode
  bodyClassName?: string
}

export function PageCard({ title, id, action, children, bodyClassName = "p-6" }: PageCardProps) {
  return (
    <div id={id} className="bg-white rounded-lg shadow-sm overflow-hidden scroll-mt-6">
      <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {action}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}
