import { IPrivacy, IUser } from "@/features/auth/types";
import { axiosPrivate } from "@/shared/api";
import { TypePrivacySchema } from "../schemes";
import { API_URL } from "@/shared/config";

class UserService {
    public async getPrivacy() {
        const { data } = await axiosPrivate.get<IPrivacy>(API_URL.candidatProfile())
        return data
    }

    public async updateProfile(data: TypePrivacySchema) {
        return await axiosPrivate.patch<IUser>(API_URL.candidatProfile(), data)
    }
}

export const userService = new UserService()