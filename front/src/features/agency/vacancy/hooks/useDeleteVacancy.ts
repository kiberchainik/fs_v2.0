import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import { AGENCY_URL } from "@/shared/config"
import { toastMessageHandler } from "@/shared/utils"
import { useMemo } from "react"
import { vacancyService } from "../services"

export const useDeleteVacancy = () => {
    const {editjobId} = useParams<{editjobId: string}>()
    const router = useRouter()

    const queryClient = useQueryClient()

    const { data:deleteVacancy, isPending:isLoadingDelete } = useMutation({
        mutationKey: ['delete vacancy'],
        mutationFn: () => vacancyService.deleteVacancy(editjobId),
        onSuccess() {
            queryClient.invalidateQueries({queryKey:['get all vacancy']})
            toast.success('Vacancy deleted successfully')
            router.push(AGENCY_URL.vacancies())
        },
        onError(error:any) {
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