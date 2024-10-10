'use client'

import { authService } from "@/features/auth/services";
import { toastMessageHandler } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"

export function useLogoutMutation () {
    const router = useRouter()

    const {mutate: logout, isPending: isLoader} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            localStorage.removeItem('fs_role')
            router.push('/')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { logout, isLoader }
}