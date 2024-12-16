import { Injectable } from "@nestjs/common";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class RatingService {
  constructor(private readonly prisma: PrismaService) { }

  async create({ userId, reviewerId, rating }: CreateRatingDto) {
    return this.prisma.rating.upsert({
      where: { userId_reviewerId: { userId, reviewerId } },
      update: { rating },
      create: { userId, reviewerId, rating },
    });
  }

  async findUserRating(userId: string) {
    const ratings = await this.prisma.rating.findMany({ where: { userId } });
    const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length || 0;
    return { userId, rating: Math.round(averageRating) };
  }
}
