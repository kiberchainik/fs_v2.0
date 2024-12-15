"use client";

import React, { useState } from "react";
import { cn } from "shadcn-ui";
import { useSubmitRating } from "@/hooks/useSubmitRating";
import { useFetchRating } from "@/hooks/useFetchRating";

interface RatingStarsProps {
  userId: string;
  reviewerId: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ userId, reviewerId }) => {
  const { data: currentRating } = useFetchRating(userId);
  const { mutate: submitRating } = useSubmitRating();

  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    submitRating({ userId, reviewerId, rating });
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={cn(
            "w-6 h-6 rounded-full",
            star <= (hoveredRating || currentRating || 0) ? "bg-yellow-400" : "bg-gray-200"
          )}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(null)}
          onClick={() => handleClick(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};
