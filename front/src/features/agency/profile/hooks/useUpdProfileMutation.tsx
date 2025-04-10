import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TypeSettingsSchema } from "../schemes";
import { agencyService } from "../services";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useTranslations } from "next-intl";

export function useUpdProfileMutation() {
    const t = useTranslations('hooks')
    const queryClient = useQueryClient()
    const { mutate: updProfile, isPending } = useMutation({
        mutationKey: ['upd profile'],
        mutationFn: (data: TypeSettingsSchema) => agencyService.updateProfile(data),
        onSuccess() {
            toast.success(t('profile_updated'))
            queryClient.invalidateQueries({ queryKey: ['getUserHeaderData'] })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { updProfile, isPending }
}