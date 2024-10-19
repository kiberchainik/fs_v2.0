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
            router.push('/auth')
        },
        onError(error:any) {
            if(error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return {verification}
}