import { BsDownload } from "react-icons/bs"

interface BotaoPdfProps {
  href: string
}

export function BotaoPdf({ href }: BotaoPdfProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-primary hover:underline text-xs font-medium"
    >
      <BsDownload size={14} /> PDF
    </a>
  )
}
