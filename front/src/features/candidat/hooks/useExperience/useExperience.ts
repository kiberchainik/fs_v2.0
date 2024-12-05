import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { experienceService } from "../../services"
import { toastMessageHandler } from "@/shared/utils"
import { AxiosResponse } from "axios"
import { IExperience, TExperienceEdit } from "../../types"

const EXPERIENCE_QUERY_KEY = ['get candidat experience']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: EXPERIENCE_QUERY_KEY })
    toast.success(message)
}

export function useExperience() {
    const { data: experience, isFetching } = useQuery({
        queryKey: EXPERIENCE_QUERY_KEY,
        queryFn: () => experienceService.getExperience()
    })

    return useMemo(() => ({
        experience, isFetching
    }), [experience, isFetching])
}

type MutationProps = {
    mutationKey: string[],
    mutationFn: (args: { id?: string, data?: TExperienceEdit }) => Promise<AxiosResponse<IExperience | { count: number }, any>>,
    successMsg: string
}

function useExperienceMutation({
    mutationKey,
    mutationFn,
    successMsg
}: MutationProps) {
    const queryClient = useQueryClient()

    const { mutate, isPending, isError } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: () => handleMutationSuccess(queryClient, successMsg),
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { mutate, isPending, isError }
}

export function useCreateExperience() {
    const { mutate: newExperience, isPending: isPendingCreate, isError } = useExperienceMutation({
        mutationKey: ['create new experience'],
        mutationFn: ({ data }) => experienceService.createExperience(data!),
        successMsg: 'Experience created successfully'
    })

    return { newExperience, isPendingCreate, isError }
}

export function useUpdExperience() {
    const { mutate: updExperience, isPending: isPendingUpdate } = useExperienceMutation({
        mutationKey: ['update candidat experience'],
        mutationFn: ({ id, data }) => experienceService.updateExperience(id!, data!),
        successMsg: 'experience edited successfully'
    })

    return { updExperience, isPendingUpdate }
}

export function useDeleteExperience() {
    const { mutate: deleteExperience, isPending: isPendingDelete } = useExperienceMutation({
        mutationKey: ['delete candidat experience'],
        mutationFn: ({ id }) => experienceService.deleteExperience(id!),
        successMsg: 'experience deleted successfully',
    })

    return { deleteExperience, isPendingDelete }
}