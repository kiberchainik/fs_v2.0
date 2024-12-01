import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { languagesService } from "../../services";
import { TypeLanguageSchema } from "../../schemes";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";
import { ILanguages } from "../../types";
import { AxiosResponse } from "axios";

const LANGUAGES_QUERY_KEY = ['get candidat languages']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: LANGUAGES_QUERY_KEY })
    toast.success(message)
}

export function useLanguages() {
    const { data: languages, isFetching } = useQuery({
        queryKey: LANGUAGES_QUERY_KEY,
        queryFn: () => languagesService.getLanguages()
    })

    return useMemo(() => ({
        languages,
        isFetching
    }), [languages, isFetching])
}

function useLanguageMutation({
    mutationKey,
    mutationFn,
    successMsg
}: {
    mutationKey: string[],
    mutationFn: (args: { id?: string; data?: TypeLanguageSchema }) => Promise<AxiosResponse<ILanguages | { count: number; }, any>>,
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

export function useCreateLanguage() {
    const { mutate: newLanguage, isPending: isPendingCreate } = useLanguageMutation({
        mutationKey: ['create new language'],
        mutationFn: ({ data }) => languagesService.createLanguage(data!),
        successMsg: 'Language created successfully'
    })

    return { newLanguage, isPendingCreate }
}

export function useUpdLanguage() {
    const { mutate: language, isPending: isPendingUpdate } = useLanguageMutation({
        mutationKey: ['update candidat language'],
        mutationFn: ({ id, data }) => languagesService.updateLanguage(id!, data!),
        successMsg: 'Language edited successfully'
    })

    return { language, isPendingUpdate }
}

export function useDeleteLanguage() {
    const { mutate: deleteLanguage, isPending: isPendingDelete } = useLanguageMutation({
        mutationKey: ['delete candidat language'],
        mutationFn: ({ id }) => languagesService.deleteLanguage(id!),
        successMsg: 'Language deleted successfully',
    })

    return { deleteLanguage, isPendingDelete }
}