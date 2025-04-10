import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";
import { vacancyPageServices } from "../services";
import { toastMessageHandler } from "@/shared/utils";
import { useTranslations } from "next-intl";

export const useSandetCandidature = () => {
    const t = useTranslations('hooks')
    const { mutate: sendCandidature, isSuccess: isSendet } = useMutation({
        mutationKey: ['sand candidature to job'],
        mutationFn: (id: string) => vacancyPageServices.sendCandidature(id),
        onSuccess: () => {
            toast.success(t('candidatureSended'));
        },
        onError: (error) => {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({
        sendCandidature, isSendet
    }), [sendCandidature, isSendet])
}