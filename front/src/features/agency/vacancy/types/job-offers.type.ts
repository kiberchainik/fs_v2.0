import { TPagination } from "."

interface IVacancyOptions {
    contractTypeId?: string
    experienceMinimalId?: string
    levelEducationId?: string
    modeJobId?: string
    workingTimeId?: string
}

export interface IVacanciaes extends IVacancyOptions {
    id?: string,
    title: string,
    slug?: string,
    description: string,
    categoryId: string,
    sectors?: string[],
    region: string,
    province: string,
    location: string,
    branchId?: string,
    tags?: string[]
    createdAt?: string
    reallyUpTo?: string | Date
    views?: number
    isValidate?: boolean
}

export type IVacanciaesFullDate = Pick<IVacanciaes, 'id' | 'slug' | 'title' | 'description'> & {
    reallyUpTo: string
    createdAt: string
    views: number
    agency: {
        agency_name: string
        logo: string
        phone: string
        address: string
        slug: string
        user: {
            email: string
        }
    }
    categories: {
        name: string
        slug: string
    }
    tags: {
        name: string
        slug: string
    }[]
    branch: {
        id: string
        name: string
        location: string
        logo: string
        email: string
        phone: string
    }
} & IVacancyOptions

export type IVacanciaesEdit =
    Omit<IVacanciaes, 'slug'> &
    {
        contratId?: string
        experienceId?: string
        modeId?: string
        workingTimeId?: string
        levelId?: string
        agencyId?: string
        branchId?: string
        categoryId: string
        tags?: { name: string }[]
        sectors?: string[]
    }

export interface IJobsResponce {
    items: IVacanciaesFullDate[]
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