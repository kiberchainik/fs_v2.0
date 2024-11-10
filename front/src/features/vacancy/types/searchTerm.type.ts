import { IPagination } from "@/shared/components/pagination/types/pagination.type"

export interface ISearchTerm extends IPagination {
    agencyId?: string
    branchId?: string
    byPopularity?: boolean
    categoryId?: string
    tagId?: string
    isValidate?: boolean
}