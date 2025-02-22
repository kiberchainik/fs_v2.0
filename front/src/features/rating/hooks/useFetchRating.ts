import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ratingService } from "../services/rating.service";
import { useMemo } from "react";

export const useFetchRating = (userId: string) => {
  const { data: currentRating, isFetching } = useQuery({
    queryKey: ["rating", userId],
    queryFn: async () => ratingService.currentRating(userId)
  })

  return useMemo(() => ({
    currentRating, isFetching
  }), [currentRating, isFetching])
}