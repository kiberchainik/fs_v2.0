import { IJobsResponce, IVacanciaes } from "@/features/agency/vacancy/types";
import { axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { ISearchTerm } from "../types/searchTerm.type";

class VacancyPageService {
    async getVacancyList(searchTerm?: ISearchTerm) {
        const { data } = await axiosPublic.get<IJobsResponce>(API_URL.vacancy(), {
            params: searchTerm ? searchTerm : {}
        })

        return data
    }
}

export const vacancyPageServices = new VacancyPageService()