import { useQuery } from "@tanstack/react-query"
import { carouselService } from "../services/carousel.service"
import { useMemo } from "react"

export function useGetCandidats() {
    const { data: candidats, isFetching } = useQuery({
        queryKey: ['get candidats for carousel'],
        queryFn: () => carouselService.getCandidats()
    })

    return useMemo(() => ({
        candidats,
        isFetching
    }), [candidats, isFetching])
}