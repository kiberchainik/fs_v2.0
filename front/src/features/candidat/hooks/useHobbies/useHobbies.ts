import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { hobbiesService } from "../../services";
import { TypeHobbieSchema } from "../../schemes";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";
import { IHobbies } from "../../types";
import { AxiosResponse } from "axios";

const HOBBIES_QUERY_KEY = ['get candidat hobbies']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: HOBBIES_QUERY_KEY })
    toast.success(message)
}

export function useHobbies() {
    const { data: hobbies, isFetching } = useQuery({
        queryKey: HOBBIES_QUERY_KEY,
        queryFn: () => hobbiesService.getHobbies()
    })

    return useMemo(() => ({
        hobbies,
        isFetching
    }), [hobbies, isFetching])
}

function useHobbieMutation({
    mutationKey,
    mutationFn,
    successMsg
}: {
    mutationKey: string[],
    mutationFn: (args: { id?: string; data?: TypeHobbieSchema }) => Promise<AxiosResponse<IHobbies | { count: number; }, any>>,
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

export function useCreateHobbie() {
    const { mutate: newHobbie, isPending: isPendingCreate } = useHobbieMutation({
        mutationKey: ['create new hobbie'],
        mutationFn: ({ data }) => hobbiesService.createHobbie(data!),
        successMsg: 'Hobbie created successfully'
    })

    return { newHobbie, isPendingCreate }
}

export function useUpdHobbie() {
    const { mutate: hobbie, isPending: isPendingUpdate } = useHobbieMutation({
        mutationKey: ['update candidat hobbie'],
        mutationFn: ({ id, data }) => hobbiesService.updateHobbie(id!, data!),
        successMsg: 'Hobbie edited successfully'
    })

    return { hobbie, isPendingUpdate }
}

export function useDeleteHobbie() {
    const { mutate: deleteHobbie, isPending: isPendingDelete } = useHobbieMutation({
        mutationKey: ['delete candidat hobbie'],
        mutationFn: ({ id }) => hobbiesService.deleteHobbie(id!),
        successMsg: 'Hobbie deleted successfully',
    })

    return { deleteHobbie, isPendingDelete }
}