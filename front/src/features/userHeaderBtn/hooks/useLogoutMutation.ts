'use client'

import { authService } from "@/features/auth/services";
import { toastMessageHandler } from "@/shared/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation"

export function useLogoutMutation () {
    const router = useRouter()
    const queryClient = useQueryClient()

    const {mutate: logout, isPending: isLoader} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            router.push('/')
            queryClient.invalidateQueries({queryKey: ['getUserHeaderData']})
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { logout, isLoader }
}