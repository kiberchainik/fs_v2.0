import { axiosPrivate, axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { IJobsResponce, IVacanciaes } from "../types"

class VacancyService {
    async getVacancyList () {
        const {data} = await axiosPublic.get<IJobsResponce>(API_URL.jobOffersList())

        return data
    }

    async getVacancyDataById (id:string) {
        const {data} = await axiosPublic.get<IVacanciaes>(API_URL.jobOffersList())

        return data
    }

    async getVacancyDataBySlug (slug:string) {
        const {data} = await axiosPublic.get<IVacanciaes>(API_URL.jobOffersList())

        return data
    }

    async createVacancyData (data:IVacanciaes) {
        const {data: vacancy} = await axiosPrivate.post<IVacanciaes>(API_URL.jobCreateNew(), data)

        return vacancy
    }
}

export const vacancyService = new VacancyService()