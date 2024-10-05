import { useMutation } from "@tanstack/react-query";
import { TypeResetPasswordSchema } from "../schemes";
import { toastMessageHandler } from "@/shared/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { resetPasswordService } from "../services/password-recovery.service";

export function useResetPasswordMutation () {
    const router = useRouter()
    const {mutate: reset, isPending: isLoading} = useMutation({
        mutationKey: ['reset password'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeResetPasswordSchema
            recaptcha: string
        }) => resetPasswordService.reset(values, recaptcha),
        onSuccess() {
            toast.success('Open email', {
                description: 'Link for confirmation sended to email'
            })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return {reset, isLoading}
}