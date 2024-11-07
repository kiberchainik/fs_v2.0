import { useQuery } from "@tanstack/react-query";
import { vacancyService } from "../services/vacancy.service";
import { useMemo } from "react";

export function useGetVacancy () {
    const {data: vacancyList, isFetching} = useQuery({
        queryKey: ['get all vacancy for agency'],
        queryFn: () => vacancyService.getAgencyVacancyList()
    })

    return useMemo(() => ({
        vacancyList,
        isFetching
    }), [vacancyList, isFetching])
}

export function useVacancyById (id:string) {
    const {data: vacancyData, isFetching} = useQuery({
        queryKey: ['get vacancy for edit by id'],
        queryFn: () => vacancyService.getVacancyDataById(id)
    })

    return {vacancyData, isFetching}
}

export function useVacancyBySlug (slug:string) {
    const {data: vacancyData, isFetching} = useQuery({
        queryKey: ['get vacancy by slug'],
        queryFn: () => vacancyService.getVacancyDataBySlug(slug)
    })

    return {vacancyData, isFetching}
}