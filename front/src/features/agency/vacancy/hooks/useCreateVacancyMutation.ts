import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { vacancyService } from "../services/vacancy.service";
import { toastMessageHandler } from "@/shared/utils";
import { IVacanciaesCreate } from "../types";
import { useMemo } from "react";

export function useCreateVacancyMutation() {
    const { mutate: createJob, isPending, isSuccess } = useMutation({
        mutationKey: ['create vacancy data'],
        mutationFn: (data: IVacanciaesCreate) => vacancyService.createVacancyData(data),
        onSuccess() {
            toast.success('Offerta di lavoro creata con successo!')
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            createJob,
            isPending,
            isSuccess
        }),
        [createJob, isPending, isSuccess])
}