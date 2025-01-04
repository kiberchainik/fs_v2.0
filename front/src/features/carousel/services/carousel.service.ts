import { axiosPublic } from "@/shared/api"
import { API_URL } from "@/shared/config"
import { ICarouselAgencies, ICarouselCandidate, ICarouselJobs } from "../types/carousel.type";

class CarouselService {
    async getCandidats(limit: number = 10) {
        const { data } = await axiosPublic.get<ICarouselCandidate[]>(API_URL.candidatsCarousel(limit))
        return data
    }

    async getAgencies(limit: number = 10) {
        const { data } = await axiosPublic.get<ICarouselAgencies[]>(API_URL.agenciesCarousel(limit))
        return data
    }

    async getJobs(limit: number = 10) {
        const { data } = await axiosPublic.get<ICarouselJobs[]>(API_URL.jobsForCarousel(limit))
        return data
    }
}

export const carouselService = new CarouselService();