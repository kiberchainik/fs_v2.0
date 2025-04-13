import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { settingsCVSchema, TypeSettingsCVSchema } from "../schemes/settings-cv.schema"
import { toast } from "sonner"
import { toastMessageHandler } from "@/shared/utils"
import { useMemo, useEffect } from "react"
import { settingsService } from "../services"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function useSettingsCVMutation() {
    const queryClient = useQueryClient()

    const { mutate: updSettingsCV, isPending } = useMutation({
        mutationKey: ['upd settings-cv'],
        mutationFn: (data: TypeSettingsCVSchema) => settingsService.updateSettingsCV(data),
        onSuccess() {
            toast.success('Impostazione è stato aggiornato con successo')
            queryClient.refetchQueries({ queryKey: ['get candidats for carousel', 'get settings-cv'] })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ updSettingsCV, isPending }), [updSettingsCV, isPending])
}

export function useGetSettingsCV() {
    const { data: settings, isFetching, refetch } = useQuery({
        queryKey: ['get settings-cv'],
        queryFn: () => settingsService.getSettingsCV()
    })

    return useMemo(() => ({
        settings,
        isFetching,
        refetch
    }), [settings, isFetching])
}

export function useSettingsCV() {
    const { updSettingsCV, isPending } = useSettingsCVMutation()
    const { settings, isFetching } = useGetSettingsCV()

    const form = useForm<TypeSettingsCVSchema>({
        resolver: zodResolver(settingsCVSchema),
        mode: 'onChange',
        defaultValues: {
            isShowCVInSearch: true,
            isOpenForAgency: true,
        },
    })

useEffect(() => {
        if (settings) {
            form.reset({
                isShowCVInSearch: settings.isShowCVInSearch,
                isOpenForAgency: settings.isOpenForAgency,
            })
        }
    }, [settings, form])

    function onSubmit(data: TypeSettingsCVSchema) {
        updSettingsCV(data)
        console.log(data);
    }

    return {
        form,
isFetching,
        onSubmit
    }
}