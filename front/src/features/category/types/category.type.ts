import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"

export interface ICategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    children?: { name: string; slug: string }[]
    level?: number | null
    parent?: IParentCategory | null // Ограничиваем вложенность
    parentId?: string[]
}

// Ограниченная вложенность родителя
export interface IParentCategory {
    name: string;
    slug: string;
    parent?: IParentCategory
}

// Ответ для страницы категории
export type TCategoryPageResponse = {
    vacancies: {
        id: string;
        name: string;
        slug: string;
        description: string;
        parent?: IParentCategory | undefined
        jobOffers: IVacanciaesFullDate[];
    };
    count: number;
    pageCount: number;
}

export type TBreadcrumbr = {
    name: string
    href: string
}[]

export type TCategorySelector = Omit<ICategory, 'parentId' | 'level'>
export type TCategoryBySlug = Omit<TCategorySelector, 'id'> & {
    breadcrumbs: TBreadcrumbr
    category_not_found?: string
    jobs: IVacanciaesFullDate[]
    count: number
    pageCount: number
}