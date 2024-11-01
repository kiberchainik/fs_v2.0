import { useMutation } from "@tanstack/react-query";
import { vacancyService } from "../services";
import { toastMessageHandler } from "@/shared/utils";
import { useState } from "react";

export function useGenerateDescription () {
    const [gentext, setGenText] = useState()

    const {mutate: generateText, isPending: isInProccess} = useMutation({
        mutationKey: ['generate text'],
        mutationFn: (data: string) => vacancyService.getGeneratedText(data),
        onSuccess(data) {
            setGenText(data)
        },
        onError(error:any) {
            toastMessageHandler(error)
        }
    })

    return {generateText, gentext, isInProccess}
}