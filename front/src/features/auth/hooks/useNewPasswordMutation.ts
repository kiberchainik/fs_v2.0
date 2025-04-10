import { useMutation } from "@tanstack/react-query";
import { TypeNewPasswordSchema } from "../schemes";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordService } from "../services/password-recovery.service";
import { useTranslations } from "next-intl";

export function useNewPasswordMutation() {
    const t = useTranslations('hooks')
    const router = useRouter()
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const { mutate: newPassword, isPending: isLoading } = useMutation({
        mutationKey: ['new password'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeNewPasswordSchema
            recaptcha: string
        }) => resetPasswordService.newpassword(values, token, recaptcha),
        onSuccess() {
            toast.success(t('new_passwrd'), {
                description: t('new_passwrd_description')
            })
            router.push('/dashboard')
        },
        onError(error: any) {
            if (error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return { newPassword, isLoading }
}