import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { educationService } from "../../services/education.service"
import { useMemo } from "react"
import { IEducation, TCreateEducation } from "../../types"
import { AxiosResponse } from "axios"
import { toastMessageHandler } from "@/shared/utils"

const EDUCATION_QUERY_KEY = ['get candidat education']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: EDUCATION_QUERY_KEY })
    toast.success(message)
}

export function useEducation() {
    const { data: education, isFetching } = useQuery({
        queryKey: EDUCATION_QUERY_KEY,
        queryFn: () => educationService.getEducation()
    })

    return useMemo(() => ({
        education, isFetching
    }), [education, isFetching])
}

type MutationProps = {
    mutationKey: string[],
    mutationFn: (args: { id?: string, data?: TCreateEducation }) => Promise<AxiosResponse<IEducation | { count: number }, any>>,
    successMsg: string
}

function useEducationMutation({
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

export function useCreateEducation() {
    const { mutate: newEducation, isPending: isPendingCreate, isError } = useEducationMutation({
        mutationKey: ['create new education'],
        mutationFn: ({ data }) => educationService.createEducation(data!),
        successMsg: 'Istruzione creata con successo'
    })

    return { newEducation, isPendingCreate, isError }
}

export function useUpdEducation() {
    const { mutate: updEducation, isPending: isPendingUpdate } = useEducationMutation({
        mutationKey: ['update candidat education'],
        mutationFn: ({ id, data }) => educationService.updateEducation(id!, data!),
        successMsg: 'Istruzione modificata con successo'
    })

    return { updEducation, isPendingUpdate }
}

export function useDeleteEducation() {
    const { mutate: deleteEducation, isPending: isPendingDelete } = useEducationMutation({
        mutationKey: ['delete candidat education'],
        mutationFn: ({ id }) => educationService.deleteEducation(id!),
        successMsg: 'Istruzione cancelata con successo',
    })

    return { deleteEducation, isPendingDelete }
}