import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SubmitRatingProps {
  userId: string;
  reviewerId: string;
  rating: number;
}

export const useSubmitRating = () => {
  return useMutation({
    mutationFn: async ({ userId, reviewerId, rating }: SubmitRatingProps) => {
      const response = await axios.post("/api/rating", { userId, reviewerId, rating });
      return response.data;
    },
  });
};
