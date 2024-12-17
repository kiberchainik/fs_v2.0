import { IVacanciaesFullDate } from "@/features/agency/vacancy/types"
import { axiosPrivate } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { IFavoriteResponse } from "../types";

class FavoriteService {
    async getSavedJobs() {
        const { data } = await axiosPrivate.get<IFavoriteResponse[]>(API_URL.savedJobs())
        return data
    }
}

export const favoriteService = new FavoriteService()