import { useQuery } from "@tanstack/react-query";
import { vacancyPageServices } from "../services/vacancyPage.service";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ISearchTerm } from "../types/searchTerm.type"
import { useAppDispatch } from "@/shared/hooks";
import { setError, setJobs, setLoading } from "../slice/sliceVacancy";

export function useGetVacancyListPage() {
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const params: ISearchTerm = {
        page: parseInt((searchParams.get('page') as string) || '1'),
        limit: parseInt((searchParams.get('limit') as string) || '5')
    }

    const query = useQuery({
        queryKey: ['get vacancy for vacancy page'],
        queryFn: () => vacancyPageServices.getVacancyListForPage(params)
    })

    useEffect(() => {
        if (query.isSuccess && query.data) {
            dispatch(setJobs(query.data))
            dispatch(setLoading(false))
        }

        if (query.isError && query.error) {
            dispatch(setError(query.error.message))
            dispatch(setLoading(false))
        }
    }, [
        query.data,
        query.isFetching,
        query.isError,
        query.error,
        dispatch,
        params
    ])

    return { query, params }
}