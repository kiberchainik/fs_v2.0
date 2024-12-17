import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";
import { vacancyPageServices } from "../services";
import { toastMessageHandler } from "@/shared/utils";

export const useSandetCandidature = () => {
    const { mutate: sendCandidature, isSuccess: isSendet } = useMutation({
        mutationKey: ['sand candidature to job'],
        mutationFn: (id: string) => vacancyPageServices.sendCandidature(id),
        onSuccess: () => {
            toast.success('Ваша кандидатура отправленна для рассмотрения на данную вакансию');
        },
        onError: (error) => {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({
        sendCandidature, isSendet
    }), [sendCandidature, isSendet])
}