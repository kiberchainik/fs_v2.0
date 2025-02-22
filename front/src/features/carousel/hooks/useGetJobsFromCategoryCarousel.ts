import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { categoryService } from "@/features/category/services"

export function useGetJobsFromCategoryCarousel(slug: string) {
    const { data, isFetching } = useQuery({
        queryKey: ['get jobs from category for carousel'],
        queryFn: () => categoryService.getCategoryDataBySlug(slug)
    })
    const jobs = data?.vacancies.jobOffers
    return useMemo(() => ({
        jobs,
        isFetching
    }), [jobs, isFetching])
}