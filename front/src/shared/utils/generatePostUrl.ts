import { CategoryNode } from "@/features/headerSearch/types/search.type";

function generateCategoryUrl(category: CategoryNode): string {
    let path = category.slug;
    if (category.parent) {
        path = generateCategoryUrl(category.parent) + '/' + path;
    }
    return path;
}

export function generatePostUrl(category: CategoryNode, slug?: string): string {
    const categoryPath = generateCategoryUrl(category);

    if (slug) {
        return `/${categoryPath}/${slug}`
    }

    return `/${categoryPath}`
}