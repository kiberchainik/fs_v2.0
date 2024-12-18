import { IJobsResponce, IVacanciaes } from "@/features/agency/vacancy/types";
import { axiosPrivate, axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { ISearchTerm } from "../types/searchTerm.type";

class VacancyPageService {
    async getVacancyList(searchTerm?: ISearchTerm) {
        const { data } = await axiosPublic.get<IJobsResponce>(API_URL.vacancy(), {
            params: searchTerm ? searchTerm : {}
        })

        return data
    }

    async saveJob(id: string) {
        return await axiosPrivate.post(API_URL.savedJobs(), { jobId: id })
    }

    async sendCandidature(id: string) {
        return await axiosPrivate.post(API_URL.sendedCanidature(), { jobId: id })
    }

    async deleteFormFavorite(id: string) {
        return await axiosPrivate.delete(API_URL.savedJobs(id))
    }

    async deleteFromCVJob(id: string) {
        return await axiosPrivate.delete(API_URL.sendedCanidature(id))
    }
}

export const vacancyPageServices = new VacancyPageService()