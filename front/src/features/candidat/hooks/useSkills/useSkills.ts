import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { skillsService } from "../../services";
import { TypeSkillSchema } from "../../schemes";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";
import { ISkills } from "../../types";
import { AxiosResponse } from "axios";

const SKILLS_QUERY_KEY = ['get candidat skills']

const handleMutationSuccess = (queryClient: ReturnType<typeof useQueryClient>, message: string) => {
    queryClient.invalidateQueries({ queryKey: SKILLS_QUERY_KEY })
    toast.success(message)
}

export function useSkills() {
    const { data: skills, isFetching } = useQuery({
        queryKey: SKILLS_QUERY_KEY,
        queryFn: () => skillsService.getSkills()
    })

    return useMemo(() => ({
        skills,
        isFetching
    }), [skills, isFetching])
}

function useSkillMutation({
    mutationKey,
    mutationFn,
    successMsg
}: {
    mutationKey: string[],
    mutationFn: (args: { id?: string; data?: TypeSkillSchema }) => Promise<AxiosResponse<ISkills | { count: number; }, any>>,
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

export function useCreateSkill() {
    const { mutate: newSkill, isPending: isPendingCreate } = useSkillMutation({
        mutationKey: ['create new skill'],
        mutationFn: ({ data }) => skillsService.createSkill(data!),
        successMsg: 'Competenza creata con successo'
    })

    return { newSkill, isPendingCreate }
}

export function useUpdSkill() {
    const { mutate: skill, isPending: isPendingUpdate } = useSkillMutation({
        mutationKey: ['update candidat skill'],
        mutationFn: ({ id, data }) => skillsService.updateSkill(id!, data!),
        successMsg: 'Competenza modificata con successo'
    })

    return { skill, isPendingUpdate }
}

export function useDeleteSkill() {
    const { mutate: deleteSkill, isPending: isPendingDelete } = useSkillMutation({
        mutationKey: ['delete candidat skill'],
        mutationFn: ({ id }) => skillsService.deleteSkill(id!),
        successMsg: 'Competenza cancelata con successo',
    })

    return { deleteSkill, isPendingDelete }
}