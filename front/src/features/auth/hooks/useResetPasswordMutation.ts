import { useMutation } from "@tanstack/react-query";
import { TypeResetPasswordSchema } from "../schemes";
import { toastMessageHandler } from "@/shared/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { resetPasswordService } from "../services/password-recovery.service";
import { useTranslations } from "next-intl";

export function useResetPasswordMutation() {
    const t = useTranslations('hooks')
    const router = useRouter()
    const { mutate: reset, isPending: isLoading } = useMutation({
        mutationKey: ['reset password'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeResetPasswordSchema
            recaptcha: string
        }) => resetPasswordService.reset(values, recaptcha),
        onSuccess() {
            toast.success(t('reset_password'), {
                description: t('reset_password_description')
            })
        },
        onError(error: any) {
            if (error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return { reset, isLoading }
}