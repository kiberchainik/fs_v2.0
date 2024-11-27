import { useQuery } from "@tanstack/react-query";
import { userService } from "../services";
import { useMemo } from "react";

export function useGetPrivacy() {
    const { data: privacy, isFetching } = useQuery({
        queryKey: ['get candidat privasy'],
        queryFn: () => userService.getPrivacy()
    })

    return useMemo(() => ({
        privacy,
        isFetching
    }), [privacy, isFetching])
}