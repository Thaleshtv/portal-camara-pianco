import type { ReactNode } from "react"
import { BsSquareFill } from "react-icons/bs"

interface InfoListItem {
  label: string
  value: ReactNode
}

interface InfoListProps {
  items: InfoListItem[]
}

export function InfoList({ items }: InfoListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label} className="text-sm text-text-primary">
          <BsSquareFill className="inline text-blue-primary mr-2" size={8} />
          <strong>{item.label}:</strong> {item.value}
        </li>
      ))}
    </ul>
  )
}
