import { axiosPrivate, axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { IJobsResponce, IVacanciaes, IVacanciaesEdit } from "../types"
import { TypeVacancySchema } from "../schemes"

class VacancyService {
    async getVacancyList () {
        const {data} = await axiosPublic.get<IJobsResponce>(API_URL.vacancy())

        return data
    }

    async getVacancyDataById (id:string) {
        const {data} = await axiosPrivate.get<IVacanciaesEdit>(API_URL.getJobById(id))

        return data
    }

    async getVacancyDataBySlug (slug:string) {
        const {data} = await axiosPublic.get<IVacanciaes>(API_URL.getJobBySlug(slug))

        return data
    }

    async createVacancyData (data:IVacanciaes) {
        const {data: vacancy} = await axiosPrivate.post<IVacanciaes>(API_URL.vacancy(), data)

        return vacancy
    }

    async updateVacancyData (id:string, data:IVacanciaes) {
        const {data: vacancy} = await axiosPrivate.patch<IVacanciaesEdit>(API_URL.vacancy(id), data)

        return vacancy
    }

    async deleteVacancy (id:string) {
        const {data: vacancy} = await axiosPrivate.delete(API_URL.vacancy(id))

        return vacancy
    }

    async getGeneratedText(keyword: string) {
        const {data} = await axiosPrivate.post('/ai-generate', {
            headers: {
                'Content-Type': 'application/json'
            },
            keyword
        });

        return data.generatedText
    }
    
}

export const vacancyService = new VacancyService()