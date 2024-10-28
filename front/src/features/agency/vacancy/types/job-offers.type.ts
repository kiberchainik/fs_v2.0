import { TPagination } from "."

export interface IVacanciaes {
    id?: string,
    title: string,
    slug?: string,
    description: string,
    categories: string,
    sectors?: string[],
    region: string,
    province: string,
    location: string,
    branchId?: string,
    tags?: string[]
    reallyUpTo?: string
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
    }[]
    tags: {
        name: string
        slug: string
    }[]
    branch: {
        id: string
        name: string
        location: string
        logo: string
        email:string
        phone: string
    }
    contractTypeId?: string
    experienceMinimalId?: string
    levelEducationId?: string
    modeJobId?: string
    workingTimeId?: string
}

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
        categories: {
            id: string
        }[]
        tags: {
            name: string
        }[]
        sectors: {
            id: string
        }[]
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