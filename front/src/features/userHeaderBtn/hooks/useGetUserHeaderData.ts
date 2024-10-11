import { useQuery } from "@tanstack/react-query"
import { userMenuService } from "../services/usermenu.service"
import { useEffect } from "react"
import { store } from "@/shared/store/store"

export function useGetUserHeaderData () {
    const {data: user, isLoading, error, isSuccess} = useQuery({
        queryKey: ['getUserHeaderData'],
        queryFn: () => userMenuService.getUserShortData()
    })

    useEffect(() => {
        store.setState(() => {
            return { state: { user } };
        })
    }, [isSuccess])

    return {user, isLoading, error}
}