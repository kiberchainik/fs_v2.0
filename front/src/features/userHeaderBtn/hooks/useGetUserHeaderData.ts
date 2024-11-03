import { useQuery } from "@tanstack/react-query"
import { userMenuService } from "../services/usermenu.service"
import { useEffect } from "react"
import { useAppDispatch } from "@/shared/hooks"
import { setError, setLoading, setUser } from "../slice/userSlice"

export function useGetUserHeaderData () {
    const dispatch = useAppDispatch()

    const query = useQuery({
        queryKey: ['getUserHeaderData'],
        queryFn: () => userMenuService.getUserShortData(),
        select: ({data}) => data
    })

  useEffect(() => {
    if (query.isSuccess && query.data) {
      dispatch(setUser(query.data));
      dispatch(setLoading(false));
    }

    if (query.isError && query.error) {
      dispatch(setError(query.error.message));
      dispatch(setLoading(false));
    }
  }, [query.data, query.isFetching, query.isError, query.error, dispatch])
    
    return query
}