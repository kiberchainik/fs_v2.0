import { axiosPrivate } from "@/shared/api";
import { TypeSettingsSchema } from "../schemes";
import { IAgencyData } from "../types/agensy.type";

class AgencyService {
    public async getAgencyData () {
        const {data} = await axiosPrivate.get<IAgencyData>('agency/profile')
        return data
    }

    public async updateProfile(data: TypeSettingsSchema) {
        return await axiosPrivate.post<IAgencyData>('agency/settings', data)
    }
}

export const agencyService = new AgencyService()