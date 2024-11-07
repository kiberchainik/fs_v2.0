import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services";
import { useMemo } from "react";

export function useCategory () {
    const {data: categories, isFetching} = useQuery({
        queryKey:['get all category'],
        queryFn: () => categoryService.getCategoryList()
    })

    return useMemo(
        () => ({
            categories,
            isFetching
        }), [categories, isFetching]
    )
}