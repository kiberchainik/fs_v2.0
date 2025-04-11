import { toastMessageHandler } from "@/shared/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { MAIN_URL } from "@/shared/config"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/shared/hooks"
import { setLoading, setUser } from "@/features/userHeaderBtn/slice/userSlice"
import { agencyService } from "../services"

export const useDeleteAgency = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    const { mutate: deleteAgency, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete profile'],
        mutationFn: () => agencyService.deleteAgency(),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get agencies for carousel'] })
            toast.success('Profilo eliminato con successo', {
                description: 'Siamo spiacenti di vederti andare via. Se hai bisogno di ulteriore assistenza, non esitare a contattarci.'
            })
            dispatch(setLoading(true))
            dispatch(setUser(null))
            router.push(MAIN_URL.home())
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteAgency,
            isLoadingDelete
        }),
        [deleteAgency, isLoadingDelete])
}