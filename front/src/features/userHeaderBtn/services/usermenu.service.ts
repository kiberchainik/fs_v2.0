import { axiosPrivate } from "@/shared/api";
import { IUserMenuHeaderData } from "../types/userMenuData.type";
import { API_URL } from "@/shared/config";

class UserMenuService {
    public async getUserShortData() {
        return await axiosPrivate<IUserMenuHeaderData>(API_URL.currentUser())
    }
}

export const userMenuService = new UserMenuService()