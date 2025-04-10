'use client'

import { authService } from "@/features/auth/services";
import { useAppDispatch } from "@/shared/hooks";
import { toastMessageHandler } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"
import { setLoading, setUser } from "../slice/userSlice";

export function useLogoutMutation() {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const { mutate: logout, isPending: isLoader } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            dispatch(setLoading(true))
            dispatch(setUser(null))
            router.push('/')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { logout, isLoader }
}