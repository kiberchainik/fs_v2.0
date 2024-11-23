import { vacancyService } from "@/features/agency/vacancy/services";
import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { useBreadcrumbs } from "@/features/breadcrumbs/hooks/useBreadcrumbs";
import { categoryService } from "@/features/category/services";
import { ICategory, TBreadcrumbr, TCategoryPageResponse } from "@/features/category/types"
import { cache } from "react";

export type ResponseProps = {
    jobData?: IVacanciaesFullDate;
    categoryData?: TCategoryPageResponse;
    breadcrumbs: TBreadcrumbr;
}

export type ResponseMetadataProps = {
    jobData?: Pick<IVacanciaesFullDate, 'title' | 'description'>
    categoryData?: Pick<ICategory, 'name' | 'description'>
}

export type Props = {
    params: { category: string; categorySlug: string[] }
    searchParams: {
        limit: number
        page: number
    }
}

export const getMetadata = cache(async ({ params }: Props): Promise<ResponseMetadataProps | undefined> => {
    const { categorySlug } = params
    const fullSlugString = categorySlug[categorySlug.length - 1]

    const categoryData = await categoryService.getCategoryMetaDataBySlug(fullSlugString);
    if (categoryData) {
        return { categoryData }
    }

    const jobData = await vacancyService.getVacancyMetaDataBySlug(fullSlugString)
    if (jobData) {
        return { jobData }
    }

    return undefined
})

export const getPageContent = cache(async ({ params, searchParams }: Props): Promise<ResponseProps | undefined> => {
    const { categorySlug } = params
    const fullSlugString = categorySlug[categorySlug.length - 1]

    const categoryData = await categoryService.getCategoryDataBySlug(fullSlugString, searchParams);
    if (categoryData) {
        const breadcrumbs = useBreadcrumbs(params);
        return { categoryData, breadcrumbs };
    }

    const jobData = await vacancyService.getVacancyDataBySlug(fullSlugString);
    if (jobData) {
        const breadcrumbs = useBreadcrumbs(params);
        return { jobData, breadcrumbs };
    }

    return undefined
})