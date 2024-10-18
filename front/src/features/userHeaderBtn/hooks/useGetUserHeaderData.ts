import { useQuery } from "@tanstack/react-query"
import { userMenuService } from "../services/usermenu.service"

export function useGetUserHeaderData () {
    const {data: user, isFetching, error} = useQuery({
        queryKey: ['getUserHeaderData'],
        queryFn: () => userMenuService.getUserShortData(),
        select: ({data}) => data
    })

    return {user, isFetching, error}
}