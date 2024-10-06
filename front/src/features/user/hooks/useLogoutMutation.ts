'use client'

import { authService } from "@/features/auth/services";
import { toastMessageHandler } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"
import { toast } from "sonner";

export function useLogoutMutation () {
    const router = useRouter()

    const {mutate: logout, isPending: isLoader} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            toast.success('Bye bye')
            router.push('/')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { logout, isLoader }
}