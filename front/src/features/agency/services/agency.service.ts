import { api } from "@/shared/api";
import { TypeSettingsSchema } from "../schemes";
import { IAgencyData } from "../types/agensy.type";

class AgencyService {
    public async getAgencyData () {
        return await api.get<IAgencyData>('agency/profile')
    }

    public async updateProfile(data: TypeSettingsSchema) {
        return await api.post<IAgencyData>('agency/settings', data)
    }
}

export const agencyService = new AgencyService()