import { TPagination } from "."

export interface IVacanciaes {
    id: string,
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

export type IVacanciaesList = Pick<IVacanciaes, 'id' | 'slug' | 'title' | 'description'>

export interface IJobsResponce {
    items: IVacanciaesList[]
    count: number
    pageCount: number
}

export type Filter = {
    agencyId?: number,
	byPopularity?: boolean
	categoryId?: number
	tagId?: number
}

export type TVacanciaesFilter = Filter & TPagination