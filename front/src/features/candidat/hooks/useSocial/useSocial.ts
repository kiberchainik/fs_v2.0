import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { socialService } from "../../services";
import { TypeSocialSchema } from "../../schemes";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";
import { ISocial } from "../../types";
import { AxiosResponse } from "axios";

const SOCIAL_QUERY_KEY = ['get candidat social']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: SOCIAL_QUERY_KEY })
    toast.success(message)
}

export function useSocial() {
    const { data: socialLinks, isFetching } = useQuery({
        queryKey: SOCIAL_QUERY_KEY,
        queryFn: () => socialService.getSocial()
    })

    return useMemo(() => ({
        socialLinks,
        isFetching
    }), [socialLinks, isFetching])
}

function useSocialMutation({
    mutationKey,
    mutationFn,
    successMsg
}: {
    mutationKey: string[],
    mutationFn: (args: { id?: string; data?: TypeSocialSchema }) => Promise<AxiosResponse<ISocial | { count: number; }, any>>,
    successMsg: string
}) {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: () => handleMutationSuccess(queryClient, successMsg),
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return { mutate, isPending }
}

export function useCreateSocial() {
    const { mutate: newSocial, isPending: isPendingCreate } = useSocialMutation({
        mutationKey: ['create new social'],
        mutationFn: ({ data }) => socialService.createSocial(data!),
        successMsg: 'Social link creato con successo'
    })

    return { newSocial, isPendingCreate }
}

export function useUpdSocial() {
    const { mutate: social, isPending: isPendingUpdate } = useSocialMutation({
        mutationKey: ['update candidat social'],
        mutationFn: ({ id, data }) => socialService.updateSocial(id!, data!),
        successMsg: 'Social link modificato con successo'
    })

    return { social, isPendingUpdate }
}

export function useDeleteSocial() {
    const { mutate: deleteSocial, isPending: isPendingDelete } = useSocialMutation({
        mutationKey: ['delete candidat social'],
        mutationFn: ({ id }) => socialService.deleteSocial(id!),
        successMsg: 'Social link cancelato con successo',
    })

    return { deleteSocial, isPendingDelete }
}