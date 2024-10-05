import { useQuery } from "@tanstack/react-query";
import { userService } from "../services";

export function useGetProfile () {
    const {data: user, isLoading, error} = useQuery({
        queryKey: ['getProfile'],
        queryFn: () => userService.getProfile()
    })

    return {user, isLoading, error }
}