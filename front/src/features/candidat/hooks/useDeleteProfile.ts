import { toastMessageHandler } from "@/shared/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { userService } from "../services"
import { toast } from "sonner"
import { MAIN_URL } from "@/shared/config"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/shared/hooks"
import { setLoading, setUser } from "@/features/userHeaderBtn/slice/userSlice"

export const useDeleteProfile = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    const { mutate: deleteProfile, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete profile'],
        mutationFn: () => userService.deleteProfile(),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get candidats for carousel'] })
            toast.success('Profilo eliminato con successo', {
                description: 'Siamo spiacenti di vederti andare via. Se hai bisogno di ulteriore assistenza, non esitare a contattarci.'
            })
            dispatch(setLoading(true))
            dispatch(setUser(null))
            router.refresh()
            router.push(MAIN_URL.home())
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteProfile,
            isLoadingDelete
        }),
        [deleteProfile, isLoadingDelete])
}