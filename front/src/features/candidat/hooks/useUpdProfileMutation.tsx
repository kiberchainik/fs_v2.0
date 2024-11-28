import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TypePrivacySchema } from "../schemes";
import { userService } from "../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";

export function useUpdProfileMutation() {
    const queryClient = useQueryClient()

    const { mutate: updProfile, isPending } = useMutation({
        mutationKey: ['upd profile'],
        mutationFn: (data: TypePrivacySchema) => userService.updateProfile(data),
        onSuccess() {
            toast.success('Profile updated')
            queryClient.invalidateQueries({ queryKey: ['getUserHeaderData'] })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ updProfile, isPending }), [updProfile, isPending])
}