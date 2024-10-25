import { axiosPrivate, axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeBranchSchema } from "../schemes";
import { IBranch } from "../types";

class BranchService {
    public async getBranchList () {
        const {data} = await axiosPrivate.get<IBranch[]>(API_URL.branch())
        return data
    }

    public async createBranch(data: TypeBranchSchema) {
        return await axiosPrivate.post<IBranch>(API_URL.branch(), data)
    }
}

export const branchService = new BranchService()