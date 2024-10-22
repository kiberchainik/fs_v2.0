import { TPagination } from "."

export interface IVacanciaes {
    title: string,
    slug: string,
    description: string,
    categoryIds: string,
    sectors?: string[],
    region: string,
    province: string,
    location: string,
    branchId?: string,
    tags?: string[]
}

export type Filter = {
    agencyId?: number,
	byPopularity?: boolean
	categoryId?: number
	tagId?: number
}

export type TVacanciaesFilter = Filter & TPagination