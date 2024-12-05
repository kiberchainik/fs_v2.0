import { axiosPrivate } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { date } from "zod"
import { IExperience, TExperienceEdit } from "../types"

class ExperienceService {
    public async getExperience() {
        const { data } = await axiosPrivate.get<IExperience[]>(API_URL.candidatExperience())

        return data
    }

    public async createExperience(data: TExperienceEdit) {
        return await axiosPrivate.post<IExperience>(API_URL.candidatExperience(), data)
    }

    public async updateExperience(id: string, data: TExperienceEdit) {
        return await axiosPrivate.patch<IExperience>(API_URL.candidatExperience(id), data)
    }

    public async deleteExperience(id: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatExperience(id))
    }
}

export const experienceService = new ExperienceService()