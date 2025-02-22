import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type"
import { axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { ICandidatFullData, ICandidatMetaData, ICandidatResponse } from "../types"

class CandidatService {
    async getCandidats(searchTerm: ISearchTerm) {
        const { data } = await axiosPublic.get<ICandidatResponse>(API_URL.candidats(), {
            params: searchTerm ? searchTerm : {}
        })

        return data
    }

    async getCandidatData(email: string) {
        const { data } = await axiosPublic.get<ICandidatFullData[]>(API_URL.candidatData(email))
        return data[0]
    }

    async getCandidatMetaData(email: string) {
        const { data } = await axiosPublic.get<ICandidatMetaData[]>(API_URL.candidatMetaData(email))
        return data[0]
    }
}

export const candidatService = new CandidatService()