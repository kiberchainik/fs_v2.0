import { IUser } from "@/features/auth/types";
import { axiosPrivate } from "@/shared/api";
import { TypeSettingsSchema } from "../schemes";

class UserService {
    public async updateProfile(data: TypeSettingsSchema) {
        return await axiosPrivate.patch<IUser>('users/profile', data)
    }
}

export const userService = new UserService()