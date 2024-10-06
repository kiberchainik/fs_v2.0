import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { verificationService } from "../services";
import { toast } from "sonner";

export function useVerificationMutation () {
    const router = useRouter()

    const {mutate: verification} = useMutation({
        mutationKey: ['varifacation email'],
        mutationFn: (token:string | null) => verificationService.newVerification(token),
        onSuccess() {
            toast.success('Email confirmated successfully')
            router.push('/')
        },
        onError() {
            router.push('/auth/candidat')
        }
    })

    return {verification}
}