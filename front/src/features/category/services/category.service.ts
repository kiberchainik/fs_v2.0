import { axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TCategorySelector } from "../types";

class CategoryService {
    public async getCategoryList () {
        const {data} = await axiosPublic.get<TCategorySelector[]>(API_URL.category())
        return data
    }
}

export const categoryService = new CategoryService()