import { axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TCategoryPageResponse, TCategorySelector } from "../types";
import { ISearchTerm } from "@/features/vacancyPage/types/searchTerm.type";

class CategoryService {
    public async getCategoryList() {
        const { data } = await axiosPublic.get<TCategorySelector[]>(API_URL.category())
        return data
    }

    public async getCategoryDataBySlug(slug: string, searchTerm?: ISearchTerm) {
        const { data } = await axiosPublic.get<TCategoryPageResponse>(API_URL.categoryBySlug(slug), {
            params: searchTerm ? searchTerm : {}
        })
        return data
    }
}

export const categoryService = new CategoryService()