import { vacancyService } from "@/features/agency/vacancy/services"
import { toastMessageHandler } from "@/shared/utils"
import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { vacancyPageServices } from "../services"
import { toast } from "sonner"

export const useDeleteFromFavorute = () => {
    const { mutate: deleteFormFavorite, } = useMutation({
        mutationKey: ['delete job from favorite'],
        mutationFn: (id: string) => vacancyPageServices.deleteFormFavorite(id),
        onSuccess() {
            toast.success('Вакансия удалена из избранного')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ deleteFormFavorite }), [deleteFormFavorite])
}