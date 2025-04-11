import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeSettingsCVSchema } from "../schemes";

class SettingsService {
    public async getSettingsCV() {
        const { data } = await axiosPrivate.get<{ isShowCVInSearch: boolean, isOpenForAgency: boolean }>(API_URL.candidateSettingsCV())
        return data
    }

    public async updateSettingsCV(data: TypeSettingsCVSchema) {
        return await axiosPrivate.patch(API_URL.candidateUpdSettingsCV(), data)
    }
}

export const settingsService = new SettingsService()