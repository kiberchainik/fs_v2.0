import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchRating = (userId: string) => {
  return useQuery({
    queryKey: ["rating", userId],
    queryFn: async () => {
      const response = await axios.get(`/api/rating/${userId}`);
      return response.data.rating;
    },
    initialData: 0,
  });
};
