import { useMutation, useQuery } from "@tanstack/react-query";
import { filterService } from "../services/filter.service";
import { useMemo } from "react";
import { TypeFilterVacancies } from "../schemes/filter.schema";
import { toastMessageHandler } from "@/shared/utils";

export function useFilterVacancy() {
    const { mutate: filterParams, data: FilterList, isPending } = useMutation({
        mutationKey: ['get jobs with filter'],
        mutationFn: (data: TypeFilterVacancies) => filterService.getFilterJobs(data),
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({
        filterParams, FilterList, isPending
    }), [filterParams, FilterList, isPending])
}