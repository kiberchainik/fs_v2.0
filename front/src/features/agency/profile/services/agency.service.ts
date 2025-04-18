import { axiosPrivate, axiosPublic } from "@/shared/api";
import { TypeSettingsSchema } from "../schemes";
import { IAgencyData, IAgencyResponce, TAgencyDataResponse } from "../types/agensy.type";
import { API_URL } from "@/shared/config";
import { ISearchTerm } from "@/features/vacancy/types/searchTerm.type";
import { removeFromStorage } from "@/shared/services";

class AgencyService {
    public async getAgencyData() {
        const { data } = await axiosPrivate.get<IAgencyData>(API_URL.agencyProfile())
        return data
    }

    public async getAllAgency(searchTerm: ISearchTerm) {
        const { data } = await axiosPublic.get<IAgencyResponce>(API_URL.agency(), {
            params: searchTerm ? searchTerm : {}
        })
        return data
    }

    public async getAgencyDataWithJobs(slug: string, searchTerm: ISearchTerm) {
        const { data } = await axiosPublic.get<TAgencyDataResponse>(API_URL.agencypage(slug), {
            params: searchTerm ? searchTerm : {}
        })

        return data
    }

    public async getAgencyMetaDataBySlug(slug: string) {
        const { data } = await axiosPublic.get<{ agency_name: string, about: string, logo: string[] }>(API_URL.agencyMetadataBySlug(slug))
        return data
    }

    public async updateProfile(data: TypeSettingsSchema) {
        return await axiosPrivate.post<IAgencyData>('agency/settings', data)
    }

    public async deleteAgency() {
        const { data } = await axiosPrivate.delete(API_URL.agency())

        if (data) removeFromStorage()

        return data
    }
}

export const agencyService = new AgencyService()