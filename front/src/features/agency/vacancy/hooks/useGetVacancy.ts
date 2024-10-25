import { useQuery } from "@tanstack/react-query";
import { vacancyService } from "../services/vacancy.service";

export function useGetVacancy () {
    const {data: vacancyList, isFetching} = useQuery({
        queryKey: ['get all vacancy'],
        queryFn: () => vacancyService.getVacancyList()
    })

    return {vacancyList, isFetching}
}