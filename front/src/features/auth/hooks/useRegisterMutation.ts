import { useMutation } from "@tanstack/react-query";
import { authService } from "../services";
import { TypeRegisterSchema } from "../schemes";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function useRegisterMutation() {
    const t = useTranslations('hooks')
    const { mutate: register, isPending: isLoading } = useMutation({
        mutationKey: ['register user'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeRegisterSchema
            recaptcha: string
        }) => authService.register(values, recaptcha),
        onSuccess(data) {
            toast.success(t('registration'), {
                description: t('registration_description')
            })
        },
        onError(error: any) {
            if (error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return { register, isLoading }
}