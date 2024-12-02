import { IHobbies } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeHobbieSchema } from "../schemes";

class HobbiesService {
    public async getHobbies() {
        const { data } = await axiosPrivate.get<IHobbies[]>(API_URL.candidatHobbies())

        return data
    }

    public async createHobbie(data: TypeHobbieSchema) {
        return await axiosPrivate.post<IHobbies>(API_URL.candidatHobbies(), data)
    }

    public async updateHobbie(id: string, data: TypeHobbieSchema) {
        return await axiosPrivate.patch<IHobbies>(`/hobbies/${id}`, data)
    }

    public async deleteHobbie(hobbieId: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatHobbies(hobbieId))
    }
}

export const hobbiesService = new HobbiesService()