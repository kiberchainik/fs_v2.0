'use client'

import { authService } from "@/features/auth/services";
import { useAppDispatch } from "@/shared/hooks";
import { toastMessageHandler } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"
import { setLoading, setUser } from "../slice/userSlice";
import { MAIN_URL } from "@/shared/config";

export function useLogoutMutation() {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const { mutate: logout, isPending: isLoader } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            dispatch(setLoading(true))
            dispatch(setUser(null))
            router.refresh()
            router.push(MAIN_URL.home())
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { logout, isLoader }
}