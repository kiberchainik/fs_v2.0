import { useQuery } from "@tanstack/react-query";
import { optionsService } from "../services";

export function useGetOptionsContractTypes () {
    const {data: contractType, isFetching} = useQuery({
        queryKey: ['get contract types'],
        queryFn: () => optionsService.getTypesJobContract()
    })

    return {contractType, isFetching}
}

export function useGetExperienceMinimal () {
    const {data: experienceMinimal, isFetching} = useQuery({
        queryKey: ['get experience minimal'],
        queryFn: () => optionsService.getExperienceMinimal()
    })

    return {experienceMinimal, isFetching}
}

export function useGetLevelEducation () {
    const {data: levelEducation, isFetching} = useQuery({
        queryKey: ['get level education'],
        queryFn: () => optionsService.getLevelEducation()
    })

    return {levelEducation, isFetching}
}

export function useGetModeJob () {
    const {data: modeJob, isFetching} = useQuery({
        queryKey: ['get mode job'],
        queryFn: () => optionsService.getModeJob()
    })

    return {modeJob, isFetching}
}

export function useGetWorkingTime () {
    const {data: workingTime, isFetching} = useQuery({
        queryKey: ['get working time'],
        queryFn: () => optionsService.getWorkingTime()
    })

    return {workingTime, isFetching}
}