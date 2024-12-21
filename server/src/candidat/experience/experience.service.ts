import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createExperienceDto: CreateExperienceDto) {
    const { contractTypeId, ...rest } = createExperienceDto
    return await this.prisma.experience.create({
      data: {
        ...rest,
        candidate: {
          connect: {
            userId
          }
        },
        contractTypeJob: {
          connect: {
            id: contractTypeId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.experience.findMany({
      where: {
        candidate: {
          userId
        }
      },
      include: {
        contractTypeJob: true
      }
    })
  }

  async update(id: string, userId: string, updateExperienceDto: UpdateExperienceDto) {
    const { contractTypeId, ...rest } = updateExperienceDto
    return await this.prisma.experience.updateMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      },
      data: {
        ...updateExperienceDto,
        contractTypeId
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
