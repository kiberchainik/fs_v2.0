import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TypePrivacySchema } from "../schemes";
import { userService } from "../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export function useUpdProfileMutation() {
    const queryClient = useQueryClient()
    const router = useRouter()

    const { mutate: updProfile, isPending } = useMutation({
        mutationKey: ['upd profile'],
        mutationFn: (data: TypePrivacySchema) => userService.updateProfile(data),
        onSuccess() {
            toast.success('Il Suo profilo è stato aggiornato con successo')
            queryClient.refetchQueries({ queryKey: ['getUserHeaderData'] })
            router.refresh()
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ updProfile, isPending }), [updProfile, isPending])
}