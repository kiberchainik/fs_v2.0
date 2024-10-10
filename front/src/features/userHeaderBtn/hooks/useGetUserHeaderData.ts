import { useQuery } from "@tanstack/react-query"
import { authService } from "@/features/auth/services"
import { userMenuService } from "../services/usermenu.service"

export function useGetUserHeaderData () {
    const {data: user, isLoading, error} = useQuery({
        queryKey: ['getUserHeaderData'],
        queryFn: () => userMenuService.getUserShortData()
    })

    return {user, isLoading, error}
}