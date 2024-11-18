import { ISearch } from "../types/search.type";
import { axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";

class SearchService {
    public async searchHeader(query: string) {
        const { data } = await axiosPublic.get<ISearch[]>(API_URL.vacancySearchHeader(), { params: { query } })
        return data
    }
}

export const searchService = new SearchService()