import { useQuery } from "@tanstack/react-query";
import { skillsService } from "../services";
import { useMemo } from "react";

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