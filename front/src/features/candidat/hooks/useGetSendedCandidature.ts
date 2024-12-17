import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { candidatureService } from "../services"

export const useGetSendedCandidature = () => {
    const { data: sendedCandidature, isLoading, error } = useQuery({
        queryKey: ['getSendedCandidature'],
        queryFn: () => candidatureService.getSendedCandidature(),
    })

    return useMemo(() => ({ sendedCandidature, isLoading, error }), [sendedCandidature, isLoading, error])
}