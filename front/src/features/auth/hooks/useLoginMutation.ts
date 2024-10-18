import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services";
import { TypeLoginSchema } from "../schemes";
import { toastMessageHandler } from "@/shared/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react"

export function useLoginMutation (setTowFactor: Dispatch<SetStateAction<boolean>>) {
    const router = useRouter()
    const queryClient = useQueryClient()

    const {mutate: login, isPending: isLoading} = useMutation({
        mutationKey: ['login user'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeLoginSchema
            recaptcha: string
        }) => authService.login(values, recaptcha),
        onSuccess(data: any) {
            // if(data.message) {
            //     toastMessageHandler(data)
            //     setTowFactor(true)
            // } else {
                toast.success('Login successfully')
                queryClient.invalidateQueries({queryKey: ['getUserHeaderData']})
                router.replace(`/${data.role.toLowerCase()}`)
            //}
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return {login, isLoading}
}