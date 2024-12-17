import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";
import { vacancyPageServices } from "../services";
import { toastMessageHandler } from "@/shared/utils";

export const useSaveInFavorite = () => {
    const { mutate: saveJob } = useMutation({
        mutationKey: ['saveJob'],
        mutationFn: (id: string) => vacancyPageServices.saveJob(id),
        onSuccess: () => {
            toast.success('Вакансия добавлена в избранное');
        },
        onError: (error) => {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({
        saveJob
    }), [saveJob])
}