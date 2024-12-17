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
        return await axiosPrivate.post(API_URL.savedJobs(), { jobId:id })
    }
}

export const vacancyPageServices = new VacancyPageService()