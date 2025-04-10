import { toastMessageHandler } from "@/shared/utils"
import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { vacancyPageServices } from "../services"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export const useDeleteFromCVSended = () => {
    const t = useTranslations('hooks')
    const { mutate: deleteCVFormJob } = useMutation({
        mutationKey: ['delete cv from vacansy'],
        mutationFn: (id: string) => vacancyPageServices.deleteFromCVJob(id),
        onSuccess() {
            toast.success(t('deletecandidature'))
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ deleteCVFormJob }), [deleteCVFormJob])
}