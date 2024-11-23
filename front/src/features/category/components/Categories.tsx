"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useCategory } from "../hooks";
import { Button, Card } from "@/shared/components";
import Link from "next/link";
import { MAIN_URL } from "@/shared/config";

export default function CategoryMenu() {
  const { categories, isFetching } = useCategory()

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Card className="w-full">
      <div className="p-4 space-y-4">
        <ul className="space-y-2">
          {categories?.map((category) => (
            <li key={category.id} className="pb-2">
              <div className="flex items-center justify-between">
                <Link href={`/${category.slug}`} className="text-lg font-semibold px-0">
                  {category.name}
                </Link>
                {category.children && category.children.length > 0 && (
                  <Button
                    variant='link'
                    onClick={() => toggleCategory(category.id)}
                    className="p-2 rounded-md hover:bg-gray-100"
                  >
                    {openCategories[category.id] ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </Button>
                )}
              </div>
              {openCategories[category.id] && category.children && (
                <ul className="mt-2 space-y-1 ml-4">
                  {category.children?.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link href={`/${category.slug}/${subcategory.slug}`} className="text-gray-600 pl-4 text-sm w-full justify-start">
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
