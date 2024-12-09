import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"

export interface ICategory {
    id: string
    name: string
    slug: string
    description: string
    children?: ICategory[]
    level?: number | null
    parentId?: string[]
}

export type TCategoryPageResponse = {
    vacancies: Pick<ICategory, 'name' | 'description' | 'slug'> & {
        jobOffers: IVacanciaesFullDate[]
    }
    count: number
    pageCount: number
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