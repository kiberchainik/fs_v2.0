import { api } from "@/shared/api";
import { IUserMenuHeaderData } from "../types/userMenuData.type";

class UserMenuService {
    public async getUserShortData() {
        return await api.get<IUserMenuHeaderData>('users/user-short-data')
    }
}

export const userMenuService = new UserMenuService()