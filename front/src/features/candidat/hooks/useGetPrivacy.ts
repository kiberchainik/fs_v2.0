import { useQuery } from "@tanstack/react-query";
import { userService } from "../services";
import { useMemo } from "react";

export function useGetPrivacy() {
    const { data: privacy, isFetching, refetch } = useQuery({
        queryKey: ['get candidat privacy'],
        queryFn: () => userService.getPrivacy()
    })

    return useMemo(() => ({
        privacy,
        isFetching,
        refetch
    }), [privacy, isFetching])
}