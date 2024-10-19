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
        onSuccess(data) {
            //toastMessageHandler(data)
            toast.success('Registered with successfully', {
                description: 'Please open your email for verified registration!'
            })
        },
        onError(error:any) {
            if(error.response && error.response.data && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            }
        }
    })

    return {register, isLoading}
}