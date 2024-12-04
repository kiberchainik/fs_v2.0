import { axiosPrivate } from "@/shared/api"
import { ICourses, TCreateCourse } from "../types"
import { API_URL } from "@/shared/config"

class CoursesService {
    public async getCourses() {
        const { data } = await axiosPrivate.get<ICourses[]>(API_URL.candidatCourses())
        return data
    }

    public async createCourses(data: TCreateCourse) {
        return await axiosPrivate.post<ICourses>(API_URL.candidatCourses(), data)
    }

    public async updateCourses(id: string, data: TCreateCourse) {
        return await axiosPrivate.patch<ICourses>(API_URL.candidatCourses(id), data)
    }

    public async deleteCourses(id: string) {
        return await axiosPrivate.delete<{ count: number }>(API_URL.candidatCourses(id))
    }
}

export const coursesService = new CoursesService()