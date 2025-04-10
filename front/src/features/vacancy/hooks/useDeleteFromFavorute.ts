import { vacancyService } from "@/features/agency/vacancy/services"
import { toastMessageHandler } from "@/shared/utils"
import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { vacancyPageServices } from "../services"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export const useDeleteFromFavorute = () => {
    const t = useTranslations('hooks')
    const { mutate: deleteFormFavorite, } = useMutation({
        mutationKey: ['delete job from favorite'],
        mutationFn: (id: string) => vacancyPageServices.deleteFormFavorite(id),
        onSuccess() {
            toast.success(t('removeCandidatInFavorite'))
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ deleteFormFavorite }), [deleteFormFavorite])
}