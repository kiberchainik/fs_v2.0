import { vacancyService } from "@/features/agency/vacancy/services";
import { useBreadcrumbs } from "@/features/breadcrumbs/hooks/useBreadcrumbs";
import { categoryService } from "@/features/category/services";
import { ResponseProps } from "@/shared/providers";
import { cache } from "react";

export type Props = {
    params: { category: string; categorySlug: string[] }
    searchParams: {
        limit: number
        page: number
    }
}

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