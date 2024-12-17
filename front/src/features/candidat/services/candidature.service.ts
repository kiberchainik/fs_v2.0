import { axiosPrivate } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { ICandidatureResponse } from "../types";

class CandidatureService {
    async getSendedCandidature() {
        const { data } = await axiosPrivate.get<ICandidatureResponse[]>(API_URL.sendedCanidature())
        return data
    }
}

export const candidatureService = new CandidatureService()