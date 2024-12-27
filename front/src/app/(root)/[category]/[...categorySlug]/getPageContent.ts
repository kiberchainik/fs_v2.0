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

function extractParents(vacancy: ICategory): { name: string; slug: string }[] {
    const parents: { name: string; slug: string }[] = [];
    let currentParent = vacancy.parent;

    while (currentParent) {
        parents.unshift({ name: currentParent.name, slug: currentParent.slug });
        currentParent = currentParent.parent || null;
    }

    return parents
}

export const getPageContent = cache(async ({ params, searchParams }: Props): Promise<ResponseProps | undefined> => {
    const { categorySlug } = params
    const fullSlugString = categorySlug[categorySlug.length - 1]

    const categoryData = await categoryService.getCategoryDataBySlug(fullSlugString, searchParams);

    if (categoryData) {
        const parents = extractParents(categoryData.vacancies)

        const breadcrumbs = useBreadcrumbs({
            category: params.category,
            categorySlug,
            parents,
            currentCategory: { name: categoryData.vacancies.name, slug: categoryData.vacancies.slug },
        })
        return { categoryData, breadcrumbs };
    }

    const jobData = await vacancyService.getVacancyDataBySlug(fullSlugString);
    if (jobData) {
        const parents = extractParents(jobData.categories)
        const breadcrumbs = useBreadcrumbs({
            category: params.category,
            categorySlug,
            parents,
            currentCategory: { name: jobData.categories.name, slug: jobData.categories.slug },
            jobSlug: fullSlugString,
            jobTitle: jobData.title,
        })

        return { jobData, breadcrumbs };
    }

    return undefined
})