import { useQuery } from "@tanstack/react-query"
import { carouselService } from "../services/carousel.service"
import { useMemo } from "react"

export function useJobsCarousel() {
    const { data: jobs, isFetching } = useQuery({
        queryKey: ['get jobs for carousel'],
        queryFn: () => carouselService.getJobs()
    })

    return useMemo(() => ({
        jobs,
        isFetching
    }), [jobs, isFetching])
}