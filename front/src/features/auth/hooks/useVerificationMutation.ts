import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { verificationService } from "../services";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function useVerificationMutation() {
    const t = useTranslations('hooks')
    const router = useRouter()
    const queryClient = useQueryClient()

    const { mutate: verification } = useMutation({
        mutationKey: ['varifacation email'],
        mutationFn: (token: string | null) => verificationService.newVerification(token),
        onSuccess({ data }) {
            toast.success(t('confirmated_email'))
            queryClient.invalidateQueries({ queryKey: ['getUserHeaderData'] })
            router.push(`/${data.existingUser.role.toLocaleLowerCase()}`)
        },
        onError(error: any) {
            router.push('/auth')
            if (error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return { verification }
}