import { IUser } from "@/features/auth/types";
import { api } from "@/shared/api";
import { TypeSettingsSchema } from "../schemes";

class UserService {
    public async updateProfile(data: TypeSettingsSchema) {
        return await api.patch<IUser>('users/profile', data)
    }
}

export const userService = new UserService()