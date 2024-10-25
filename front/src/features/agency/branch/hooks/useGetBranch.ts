import { useQuery } from "@tanstack/react-query";
import { branchService } from "../services";

export function useGetBranch () {
    const {data: branches, isFetching} = useQuery({
        queryKey:['get all branch'],
        queryFn: () => branchService.getBranchList()
    })

    return {branches, isFetching}
}