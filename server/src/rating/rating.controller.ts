import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { RatingService } from "./rating.service";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { Authorization } from "@/auth/decorators";
import { UserRole } from "prisma/__generated__";

@Controller("rating")
export class RatingController {
  constructor(private readonly ratingService: RatingService) { }

  @Post()
  @Authorization(UserRole.AGENCY)
  async create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get(":userId")
  @Authorization(UserRole.AGENCY)
  async findOne(@Param("userId") userId: string) {
    return this.ratingService.findUserRating(userId);
  }
}