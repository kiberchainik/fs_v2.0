"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useCategory } from "../hooks";
import { Card } from "@/shared/components";

export default function CategoryList() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})
  const { categories, isFetching } = useCategory()

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Card className="p-4">
      <ul className="space-y-4">
        {categories?.map((category) => (
          <li key={category.id}>
            <div
              className="flex items-center cursor-pointer text-lg font-semibold"
              onClick={() => toggleCategory(category.id)}
            >
              {openCategories[category.id] ? (
                <ChevronDown className="mr-2 h-4 w-4" />
              ) : (
                <ChevronRight className="mr-2 h-4 w-4" />
              )}
              {category.name}
            </div>
            {openCategories[category.id] && (
              <ul className="ml-6 mt-2 space-y-2">
                {category.children && category.children.map((children) => (
                  <li key={children.id} className="text-gray-700">
                    {children.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
