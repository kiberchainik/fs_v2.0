'use client'

import Link from "next/link"
import { useRegions } from "../hooks/useRegions"

export function BottomRegions() {
  const { regioni } = useRegions() // Массив регионов с городами

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10">
      {regioni?.map((regione) => (
        <div key={regione.id}>
          <Link
            href={`/${regione.slug}`}
            className="text-lg font-semibold block mb-2"
          >
            Offerte di lavoro {regione.nome}
          </Link>

          {regione.citta && regione.citta.length > 0 && (
            <ul className="space-y-1">
              {regione.citta.map((citta) => (
                <li key={citta.id}>
                  <Link
                    href={`/${regione.slug}/${citta.slug}`}
                    className="text-gray-600 text-sm block hover:underline"
                  >
                    Offerte di lavoro <b>{citta.nome}</b>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}