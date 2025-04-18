import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { branchService } from "../services"
import { toast } from "sonner"
import { AGENCY_URL } from "@/shared/config"
import { toastMessageHandler } from "@/shared/utils"
import { useMemo } from "react"

export const useDeleteBranch = () => {
    const { editBranchId } = useParams<{ editBranchId: string }>()
    const router = useRouter()

    const queryClient = useQueryClient()

    const { mutate: deleteBranch, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete branch'],
        mutationFn: () => branchService.deleteBranch(editBranchId),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get all branch'] })
            toast.success('Filiale eliminata con successo')
            router.push(AGENCY_URL.branches())
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteBranch,
            isLoadingDelete
        }),
        [deleteBranch, isLoadingDelete])
}

export const useDeleteManyBranch = () => {
    const queryClient = useQueryClient()

    const { mutate: deleteManyBranch, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete many branch'],
        mutationFn: (ids: string[]) => branchService.deleteManyBranch(ids),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get all branch'] })
            toast.success('Filiali eliminate con successo')
        },
        onError(error: any) {
            toastMessageHandler(error)
        }
    })

    return useMemo(
        () => ({
            deleteManyBranch,
            isLoadingDelete
        }),
        [deleteManyBranch, isLoadingDelete])
} 