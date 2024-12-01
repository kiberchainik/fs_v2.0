import { ILanguages } from "@/features/candidat/types";
import { axiosPrivate } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeLanguageSchema } from "../schemes";

class LanguagesService {
    public async getLanguages() {
        const { data } = await axiosPrivate.get<ILanguages[]>(API_URL.candidatLanguages())

        return data
    }

    public async createLanguage(data: TypeLanguageSchema) {
        return await axiosPrivate.post<ILanguages>(API_URL.candidatLanguages(), data)
    }

    public async updateLanguage(id: string, data: TypeLanguageSchema) {
        return await axiosPrivate.patch<ILanguages>(`/languages/${id}`, data)
    }

    public async deleteLanguage(languageId: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatLanguages(languageId))
    }
}

export const languagesService = new LanguagesService()