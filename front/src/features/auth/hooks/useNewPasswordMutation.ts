import { useMutation } from "@tanstack/react-query";
import { TypeNewPasswordSchema, TypeResetPasswordSchema } from "../schemes";
import { toastMessageHandler } from "@/shared/utils";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordService } from "../services/password-recovery.service";

export function useNewPasswordMutation () {
    const router = useRouter()
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const {mutate: newPassword, isPending: isLoading} = useMutation({
        mutationKey: ['new password'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeNewPasswordSchema
            recaptcha: string
        }) => resetPasswordService.newpassword(values, token, recaptcha),
        onSuccess() {
            toast.success('Password changet successfully', {
                description: 'Open account whith new password'
            })
            router.push('/dashboard/settings')
        },
        onError(error:any) {
            if(error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return {newPassword, isLoading}
}