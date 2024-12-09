import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { verificationService } from "../services";
import { toast } from "sonner";

export function useVerificationMutation() {
    const router = useRouter()
    const queryClient = useQueryClient()

    const { mutate: verification } = useMutation({
        mutationKey: ['varifacation email'],
        mutationFn: (token: string | null) => verificationService.newVerification(token),
        onSuccess({ data }) {
            toast.success('Email confirmated successfully')
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