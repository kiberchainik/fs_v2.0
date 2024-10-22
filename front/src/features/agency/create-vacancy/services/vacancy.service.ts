import { axiosPrivate, axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { IVacanciaes } from "../types"

class VacancyService {
    async getVacancyData (id:string) {
        const {data} = await axiosPublic.get<IVacanciaes>(API_URL.jobOffersList())

        return data
    }

    async createVacancyData (data:IVacanciaes) {
        const {data: vacancy} = await axiosPrivate.post<IVacanciaes>(API_URL.jobCreateNew(), data)

        return vacancy
    }
}

export const vacancyService = new VacancyService()