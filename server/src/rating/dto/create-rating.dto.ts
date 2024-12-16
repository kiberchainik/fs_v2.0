import { IsInt, IsString, Min, Max } from "class-validator";

export class CreateRatingDto {
    @IsString()
    userId: string;

    @IsString()
    reviewerId: string;

    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;
}