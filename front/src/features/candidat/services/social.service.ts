import { ISocial } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeSocialSchema } from "../schemes";

class SocialService {
    public async getSocial() {
        const { data } = await axiosPrivate.get<ISocial[]>(API_URL.candidatSocial())

        return data
    }

    public async createSocial(data: TypeSocialSchema) {
        return await axiosPrivate.post<ISocial>(API_URL.candidatSocial(), data)
    }

    public async updateSocial(id: string, data: TypeSocialSchema) {
        return await axiosPrivate.patch<ISocial>(`/social/${id}`, data)
    }

    public async deleteSocial(hobbieId: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatSocial(hobbieId))
    }
}

export const socialService = new SocialService()