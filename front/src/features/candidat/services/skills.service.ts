import { ISkills } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeSkillSchema } from "../schemes";

class SkillsService {
    public async getSkills() {
        const { data } = await axiosPrivate.get<ISkills[]>(API_URL.candidatSkills())

        return data
    }

    public async createSkill(data: TypeSkillSchema) {
        return await axiosPrivate.post<ISkills>(API_URL.candidatSkills(), data)
    }

    public async updateSkill(id: string, data: TypeSkillSchema) {
        return await axiosPrivate.patch<ISkills>(`/skills/${id}`, data)
    }

    public async deleteSkill(skillId: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatSkills(skillId))
    }
}

export const skillsService = new SkillsService()