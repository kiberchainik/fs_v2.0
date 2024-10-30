import { useQuery } from "@tanstack/react-query";
import { branchService } from "../services";

export function useGetBranch () {
    const {data: branches, isFetching} = useQuery({
        queryKey:['get all branch'],
        queryFn: () => branchService.getBranchList()
    })

    return {branches, isFetching}
}

export function useGetBranchById (id:string) {
    const {data: branchData, isFetching} = useQuery({
        queryKey: ['get branch for edit by id'],
        queryFn: () => branchService.getBranchById(id)
    })

    return {branchData, isFetching}
}