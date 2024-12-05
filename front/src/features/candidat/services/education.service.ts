import { axiosPrivate } from "@/shared/api"
import { IEducation, TCreateEducation } from "../types"
import { API_URL } from "@/shared/config"
import { date } from "zod"

class EducationService {
    public async getEducation() {
        const { data } = await axiosPrivate.get<IEducation[]>(API_URL.candidatEducation())

        return data
    }

    public async createEducation(data: TCreateEducation) {
        return await axiosPrivate.post<IEducation>(API_URL.candidatEducation(), data)
    }

    public async updateEducation(id: string, data: TCreateEducation) {
        return await axiosPrivate.patch<IEducation>(API_URL.candidatEducation(id), data)
    }

    public async deleteEducation(id: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatEducation(id))
    }
}

export const educationService = new EducationService()