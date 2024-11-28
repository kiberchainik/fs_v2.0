import { ISkills } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { TypeSkillsSchema } from "../schemes";
import { API_URL } from "@/shared/config";

class UserService {
    public async getSkills() {
        const { data } = await axiosPrivate.get<ISkills>(API_URL.candidatSkills())

        return data
    }

    public async updateProfile(data: TypePrivacySchema) {
        return await axiosPrivate.patch<IUser>(API_URL.candidatProfile(), data)
    }
}

export const userService = new UserService()