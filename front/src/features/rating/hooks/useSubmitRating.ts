import { useMutation } from "@tanstack/react-query"
import { ratingService } from "../services/rating.service"
import { SubmitRatingProps } from "../types/rating.type";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";
import { useMemo } from "react";

export const useSubmitRating = () => {
  const { mutate: submitRating, isSuccess: isSubmitted } = useMutation({
    mutationKey: ['submitRating'],
    mutationFn: (data: SubmitRatingProps) => ratingService.submitRating(data),
    onSuccess: () => { },
    onError: (error) => {
      toastMessageHandler(error)
    }
  })

  return useMemo(() => ({
    submitRating, isSubmitted
  }), [submitRating, isSubmitted])
}
