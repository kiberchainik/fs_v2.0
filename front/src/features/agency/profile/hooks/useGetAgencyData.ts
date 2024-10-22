import { useQuery } from "@tanstack/react-query"
import { agencyService } from "../services"

export function useGetAgencyData () {
    const {data: user, isLoading, error} = useQuery({
        queryKey: ['getAgencyData'],
        queryFn: () => agencyService.getAgencyData()
    })

    return {user, isLoading, error}
}