import { axiosPrivate } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { TypeLifeStatusSchema } from "../schemes"
import { ILifeStatus } from "../types"

class LifeStatusService {
    public async getLifeStatus() {
        const { data } = await axiosPrivate.get<ILifeStatus>(API_URL.candidatLifeStatus())

        return data
    }

    public async updateLifeStatus(data: TypeLifeStatusSchema) {
        return await axiosPrivate.post<ILifeStatus>(API_URL.candidatLifeStatus(), data)
    }
}

export const lifestatusService = new LifeStatusService()