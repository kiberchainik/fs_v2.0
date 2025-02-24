import { TBreadcrumbr } from "@/features/category/types"
import { TPagination } from "."
import { IAgencyData } from "../../profile/types/agensy.type"

interface IVacancyOptions {
    contractTypeId?: string
    experienceMinimalId?: string
    levelEducationId?: string
    modeJobId?: string
    workingTimeId?: string
}

export interface ISaveInFavorites {
    candidate: {
        userId: string
    }
}

export interface ISendCadidature {
    candidate: {
        userId: string
    }
}

export interface IVacanciaes extends IVacancyOptions {
    id?: string,
    title: string,
    slug?: string,
    description: string,
    categoryId: string,
    categories?: {
        id: string,
        description: string,
        name: string
        slug: string
    }
    sectors?: string[]
    region: string
    province: string,
    location: string
    salary?: number
    branchId?: string
    tags?: string[]
    savedBy?: ISaveInFavorites[]
    sendCandidature?: ISendCadidature[]
    createdAt?: string
    reallyUpTo?: string | Date
    views?: number
    isValidate?: boolean
}

export type IVacanciaesFullDate = Pick<IVacanciaes, 'id' | 'slug' | 'title' | 'description' | 'branchId' | 'savedBy' | 'sendCandidature' | 'location' | 'salary'> & {
    breadcrumbs: TBreadcrumbr
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
        id: string,
        description: string,
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
    contractType: { id: string, name: string }
    experienceMinimalJob: { id: string, name: string }
    levelEducation: { id: string, name: string }
    modeJob: { id: string, name: string }
    workingTimeJob: { id: string, name: string }
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