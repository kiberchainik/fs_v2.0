import { useMutation } from "@tanstack/react-query";
import { TypePrivacySchema } from "../schemes";
import { userService } from "../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";

export function useUpdProfileMutation() {
    const { mutate: updProfile, isPending } = useMutation({
        mutationKey: ['upd profile'],
        mutationFn: (data: TypePrivacySchema) => userService.updateProfile(data),
        onSuccess() {
            toast.success('Profile updated')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { updProfile, isPending }
}