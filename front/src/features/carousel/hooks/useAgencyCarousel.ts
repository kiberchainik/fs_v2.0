import { useQuery } from "@tanstack/react-query"
import { carouselService } from "../services/carousel.service"
import { useMemo } from "react"

export function useGetAgencies() {
    const { data: agencies, isFetching } = useQuery({
        queryKey: ['get agencies for carousel'],
        queryFn: () => carouselService.getAgencies()
    })

    return useMemo(() => ({
        agencies,
        isFetching
    }), [agencies, isFetching])
}