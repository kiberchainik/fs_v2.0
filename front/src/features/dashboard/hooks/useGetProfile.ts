import { useQuery } from "@tanstack/react-query"
import { authService } from "@/features/auth/services"

export function useGetProfile () {
    const {data: user, isLoading, error} = useQuery({
        queryKey: ['getProfile'],
        queryFn: () => authService.getProfile()
    })

    return {user, isLoading, error }
}