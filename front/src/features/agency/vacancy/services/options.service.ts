import { axiosPublic } from "@/shared/api";
import { IOptions } from "../types";
import { API_URL } from "@/shared/config";

class OptionsService {
    public async getTypesJobContract () {
        const {data} = await axiosPublic.get<IOptions[]>(API_URL.options('contract-type'))
        return data
    }

    public async getExperienceMinimal () {
        const {data} = await axiosPublic.get<IOptions[]>(API_URL.options('experience-minimal'))
        return data
    }

    public async getLevelEducation () {
        const {data} = await axiosPublic.get<IOptions[]>(API_URL.options('level-education'))
        return data
    }

    public async getModeJob () {
        const {data} = await axiosPublic.get<IOptions[]>(API_URL.options('mode-job'))
        return data
    }

    public async getWorkingTime () {
        const {data} = await axiosPublic.get<IOptions[]>(API_URL.options('working-time'))
        return data
    }
}

export const optionsService = new OptionsService()