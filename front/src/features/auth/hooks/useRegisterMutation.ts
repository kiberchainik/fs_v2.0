import { useMutation } from "@tanstack/react-query";
import { authService } from "../services";
import { TypeRegisterSchema } from "../schemes";
import { toastMessageHandler } from "@/shared/utils";
import { toast } from "sonner";

export function useRegisterMutation () {
    const {mutate: register, isPending: isLoading} = useMutation({
        mutationKey: ['register user'],
        mutationFn: ({
            values,
            recaptcha
        }: {
            values: TypeRegisterSchema
            recaptcha: string
        }) => authService.register(values, recaptcha),
        onSuccess(data: any) {
            toastMessageHandler(data)
            // toast.success('Registered with successfully', {
            //     description: 'Please open your email for verified registration!'
            // })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return {register, isLoading}
}