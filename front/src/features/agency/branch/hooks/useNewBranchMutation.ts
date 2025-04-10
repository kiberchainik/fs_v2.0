import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner"
import { toastMessageHandler } from "@/shared/utils";
import { branchService } from "../services";
import { useMemo } from "react";
import { TypeBranchSchema } from "../schemes";

export function useNewBranchMutation() {
    const queryClient = useQueryClient()
    const { mutate: createBranch, isPending, isSuccess } = useMutation({
        mutationKey: ['create vacancy data'],
        mutationFn: (data: TypeBranchSchema) => branchService.createBranch(data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get all branch'] })
            toast.success('Nuova filiale creata con successo!')
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            createBranch,
            isPending,
            isSuccess
        }),
        [createBranch, isPending, isSuccess])
}