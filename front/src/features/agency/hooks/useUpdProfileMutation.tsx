import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TypeSettingsSchema } from "../schemes";
import { agencyService } from "../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";

export function useUpdProfileMutation() {
    const queryClient = useQueryClient()
    const {mutate: updProfile, isPending} = useMutation({
        mutationKey: ['upd profile'],
        mutationFn: (data: TypeSettingsSchema) => agencyService.updateProfile(data),
        onSuccess() {
            toast.success('Profile updated')
            queryClient.invalidateQueries({queryKey: ['getUserHeaderData', 'upd profile']})
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return {updProfile, isPending}
}