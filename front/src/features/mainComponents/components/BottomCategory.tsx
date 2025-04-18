'use client'

import Link from "next/link"
import { useCategory } from "../../category/hooks"

export function BottomCategory() {
    const { categories } = useCategory()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 mt-10">
            {categories?.map((category) => (
                <div key={category.id}>
                    <Link
                        href={`/${category.slug}`}
                        className="text-lg font-semibold block mb-2"
                    >
                        Offerte di lavoro {category.name}
                    </Link>

                    {category.children && category.children.length > 0 && (
                        <ul className="space-y-1">
                            {category.children.map((subcategory) => (
                                <li key={subcategory.id}>
                                    <Link
                                        href={`/${category.slug}/${subcategory.slug}`}
                                        className="text-gray-600 text-sm block hover:underline"
                                    >
                                        Offerte di lavoro <b>{subcategory.name}</b>
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