import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";
import { vacancyPageServices } from "../services";
import { toastMessageHandler } from "@/shared/utils";
import { useTranslations } from "next-intl";

export const useSaveInFavorite = () => {
    const t = useTranslations('hooks')
    const { mutate: saveJob, isSuccess: isSaved } = useMutation({
        mutationKey: ['saveJob'],
        mutationFn: (id: string) => vacancyPageServices.saveJob(id),
        onSuccess: () => {
            toast.success(t('addCandidatInFavorite'));
        },
        onError: (error) => {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({
        saveJob, isSaved
    }), [saveJob, isSaved])
}