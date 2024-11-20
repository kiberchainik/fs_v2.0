import { IJobsResponce } from "@/features/agency/vacancy/types"
import { axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { TypeFilterVacancies } from "../schemes/filter.schema"

class FilterService {
    async getFilterJobs(params: TypeFilterVacancies) {
        const { data } = await axiosPublic.post<IJobsResponce>(API_URL.filtering(), params)

        return data
    }
}

export const filterService = new FilterService()