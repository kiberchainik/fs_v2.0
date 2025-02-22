import { axiosPublic } from "@/shared/api"
import { SubmitRatingProps } from "../types/rating.type"

class RatingService {
    async currentRating(userId: string) {
        return await axiosPublic.get<{ userId: string, rating: number }>('/rating/' + userId)
    }

    async submitRating({ userId, reviewerId, rating }: SubmitRatingProps) {
        return await axiosPublic.post('/rating', { userId, reviewerId, rating })
    }
}

export const ratingService = new RatingService()