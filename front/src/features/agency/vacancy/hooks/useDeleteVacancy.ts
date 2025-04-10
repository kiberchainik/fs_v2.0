import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import { AGENCY_URL } from "@/shared/config"
import { toastMessageHandler } from "@/shared/utils"
import { useMemo } from "react"
import { vacancyService } from "../services"

export const useDeleteVacancy = () => {
    const { editjobId } = useParams<{ editjobId: string }>()
    const router = useRouter()

    const queryClient = useQueryClient()

    const { mutate: deleteVacancy, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete vacancy'],
        mutationFn: () => vacancyService.deleteVacancy(editjobId),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get all vacancy'] })
            toast.success('Offerta di lavoro eliminata con successo')
            router.push(AGENCY_URL.vacancies())
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteVacancy,
            isLoadingDelete
        }),
        [deleteVacancy, isLoadingDelete])
}

export const useDeleteManyVacancy = () => {
    const queryClient = useQueryClient()

    const { mutate: deleteManyVacancy, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete many vacancy'],
        mutationFn: (ids: string[]) => vacancyService.deleteManyVacancy(ids),

        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get all vacancy'] })
            toast.success(`Vacancies has be deleted successfully`)
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteManyVacancy,
            isLoadingDelete
        }),
        [deleteManyVacancy, isLoadingDelete])
} 