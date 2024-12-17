import { useQuery } from "@tanstack/react-query"
import { favoriteService } from "../services"
import { useMemo } from "react"

export const useGetSavedJobs = () => {
    const { data: savedJobs, isLoading, error } = useQuery({
        queryKey: ['getSavedJobs'],
        queryFn: () => favoriteService.getSavedJobs(),
    })

    return useMemo(() => ({ savedJobs, isLoading, error }), [savedJobs, isLoading, error])
}