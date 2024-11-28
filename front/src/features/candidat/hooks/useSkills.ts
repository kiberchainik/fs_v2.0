import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { skillsService } from "../services";
import { useMemo } from "react";
import { TypeSkillSchema } from "../schemes";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";

export function useSkills() {
    const { data: skills, isFetching } = useQuery({
        queryKey: ['get candidat skills'],
        queryFn: () => skillsService.getSkills()
    })

    return useMemo(() => ({
        skills,
        isFetching
    }), [skills, isFetching])
}

export function useCreateSkill() {
    const queryClient = useQueryClient()

    const { mutate: newSkill, isPending } = useMutation({
        mutationKey: ['create new skill'],
        mutationFn: (data: TypeSkillSchema) => skillsService.createProfile(data),
        onSuccess() {
            toast.success('Skill created successfully')
            queryClient.invalidateQueries({ queryKey: ['get candidat skills'] })
        },
        onError(error) {
            toastMessageHandler(error)
        }
    })

    return useMemo(() => ({ newSkill, isPending }), [newSkill, isPending])
}