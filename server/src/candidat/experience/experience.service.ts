import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createExperienceDto: CreateExperienceDto) {
    return await this.prisma.experience.create({
      data: {
        ...createExperienceDto,
        candidate: {
          connect: {
            userId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.experience.findMany({
      where: {
        AND: [
          {
            candidate: {
              userId
            }
          }
        ]
      }
    })
  }

  async update(id: string, userId: string, updateExperienceDto: UpdateExperienceDto) {
    return await this.prisma.experience.updateMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      },
      data: {
        ...updateExperienceDto
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.experience.deleteMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      }
    })
  }
}
