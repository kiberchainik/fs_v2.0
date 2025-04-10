import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { vacancyService } from "../services/vacancy.service";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react"
import { useParams } from "next/navigation"
import { IVacanciaes } from "../types";

export function useUpdateVacancyMutation() {
    const { editjobId } = useParams<{ editjobId: string }>()
    const queryClient = useQueryClient()

    const { mutate: updJob, isPending, isSuccess } = useMutation({
        mutationKey: ['update vacancy data'],
        mutationFn: (data: IVacanciaes) => vacancyService.updateVacancyData(editjobId, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get all vacancy']
            })
            toast.success('Offerta di lavoro aggiornata con successo!')
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            updJob,
            isPending,
            isSuccess
        }),
        [updJob, isPending, isSuccess])
}