import { useMutation } from "@tanstack/react-query";
import { TypeVacancySchema } from "../schemes";
import { toast } from "sonner";
import { vacancyService } from "../services/vacancy.service";
import { toastMessageHandler } from "@/shared/utils";

export function useCreateVacancyMutation () {
    const {mutate: createJob, isPending} = useMutation({
        mutationKey: ['create vacancy data'],
        mutationFn: (data: TypeVacancySchema) => vacancyService.createVacancyData(data),
        onSuccess() {
            toast.success('Vacancy created succesfully!')
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return {createJob, isPending}
}