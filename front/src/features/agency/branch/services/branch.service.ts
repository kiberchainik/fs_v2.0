import { axiosPrivate, axiosPublic } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { TypeBranchSchema } from "../schemes";
import { IBranch } from "../types";

class BranchService {
    public async getBranchList () {
        const {data} = await axiosPrivate.get<IBranch[]>(API_URL.branch())
        return data
    }
    
    public async getBranchById (id:string) {
        const {data} = await axiosPrivate.get<IBranch>(API_URL.branch(id))
        return data
    }

    public async createBranch(data: TypeBranchSchema) {
        const {data: branch} = await axiosPrivate.post<IBranch>(API_URL.branch(), data)
        return branch
    }

    public async updateBranch(id:string, data: TypeBranchSchema) {
        const {data:updBranch} = await axiosPrivate.patch<IBranch>(API_URL.branch(id), data)
        return updBranch
    }

    public async deleteBranch(id:string) {
        const {data} = await axiosPrivate.delete(API_URL.branch(id))
        return data
    }
}

export const branchService = new BranchService()