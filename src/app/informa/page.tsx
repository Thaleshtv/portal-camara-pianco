import Link from "next/link"
import { noticias } from "@/data/noticias"
import { BsInboxFill } from "react-icons/bs"

export default function Informa() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl font-medium text-text-primary mb-10">Todas as notícias</h2>

        {noticias.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 flex flex-col items-center justify-center text-center">
            <BsInboxFill className="text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 text-sm">Nenhuma notícia encontrada.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((item) => (
              <article key={item.id} className="overflow-hidden">
                <Link href={`/informa/${item.id}/${item.slug}`} className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
                <div className="py-4">
                  <span className="text-blue-primary text-sm lowercase">{item.tag}</span>
                  <Link href={`/informa/${item.id}/${item.slug}`} className="block">
                    <h3 className="text-xl font-bold text-text-primary my-3 leading-tight hover:text-blue-primary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-text-primary/80 text-sm mb-3">{item.description}</p>
                  <span className="text-sm text-text-primary/60 block mb-3">{item.date}</span>
                  <Link
                    href={`/informa/${item.id}/${item.slug}`}
                    className="text-blue-primary font-bold text-xs hover:underline"
                  >
                    Continue lendo...
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
