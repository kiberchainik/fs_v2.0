import { useQuery } from "@tanstack/react-query"
import { userMenuService } from "../services/usermenu.service"
import { useEffect, useState } from "react"
import { IUserMenuHeaderData } from "../types/userMenuData.type"

export function useGetUserHeaderData () {
    const [user, setUser] = useState<IUserMenuHeaderData | undefined>(undefined)
    const {data, isFetching, isError} = useQuery({
        queryKey: ['getUserHeaderData'],
        queryFn: () => userMenuService.getUserShortData(),
        select: ({data}) => data
    })

    useEffect(()=> {
        setUser(!isError ? data : undefined)
    }, [isFetching, isError])
    
    return {user, isFetching}
}