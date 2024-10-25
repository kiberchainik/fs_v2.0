import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner"
import { toastMessageHandler } from "@/shared/utils";
import { IBranch } from "../types";
import { branchService } from "../services";

export function useNewBranchMutation () {
    const queryClient = useQueryClient()
    const {mutate: createBranch, isPending, isSuccess} = useMutation({
        mutationKey: ['create vacancy data'],
        mutationFn: (data: IBranch) => branchService.createBranch(data),
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['get all branch']})
            toast.success('New filial created succesfully!')
        },
        onError(error:any) {
            toastMessageHandler(error)
        }
    })

    return {createBranch, isPending, isSuccess}
}