import { toastMessageHandler } from "@/shared/utils"
import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { vacancyPageServices } from "../services"
import { toast } from "sonner"

export const useDeleteFromCVSended = () => {
    const { mutate: deleteCVFormJob } = useMutation({
        mutationKey: ['delete cv from vacansy'],
        mutationFn: (id: string) => vacancyPageServices.deleteFromCVJob(id),
        onSuccess() {
            toast.success('Ваша кандидатура удалена из списка кандидатов на данную вакансию')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ deleteCVFormJob }), [deleteCVFormJob])
}