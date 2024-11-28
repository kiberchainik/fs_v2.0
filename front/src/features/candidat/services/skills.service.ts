import { ISkills } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeSkillSchema } from "../schemes";

class SkillsService {
    public async getSkills() {
        const { data } = await axiosPrivate.get<ISkills[]>(API_URL.candidatSkills())

        return data
    }

    public async createProfile(data: TypeSkillSchema) {
        return await axiosPrivate.post<ISkills>(API_URL.candidatSkills(), data)
    }

    public async updateProfile(data: TypeSkillSchema) {
        return await axiosPrivate.patch<ISkills>(API_URL.candidatSkills(), data)
    }

    public async deleteProfile(skillId: string) {
        return await axiosPrivate.delete<ISkills>(API_URL.candidatSkills(skillId))
    }
}

export const skillsService = new SkillsService()