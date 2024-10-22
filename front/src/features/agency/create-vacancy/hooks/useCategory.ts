import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services";

export function useCategory () {
    const {data: categories, isFetching} = useQuery({
        queryKey:['get all category'],
        queryFn: () => categoryService.getCategoryList()
    })

    return {categories, isFetching}
}