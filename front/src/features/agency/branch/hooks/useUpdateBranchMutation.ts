import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner"
import { toastMessageHandler } from "@/shared/utils";
import { IBranch, IBranchEdit } from "../types";
import { branchService } from "../services";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export function useUpdateBranchMutation () {
    const {editBranchId} = useParams<{editBranchId: string}>()
    const queryClient = useQueryClient()
    
    const {mutate: updateBranch, isPending, isSuccess} = useMutation({
        mutationKey: ['update branch data'],
        mutationFn: (data: IBranchEdit) => branchService.updateBranch(editBranchId, data),
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['get all branch']})
            toast.success('New filial created succesfully!')
        },
        onError(error:any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            updateBranch,
            isPending,
            isSuccess
        }),
        [updateBranch, isPending, isSuccess])
}