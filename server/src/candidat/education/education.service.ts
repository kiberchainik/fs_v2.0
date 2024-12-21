import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createEducationDto: CreateEducationDto) {
    const { levelId, ...rest } = createEducationDto
    return await this.prisma.education.create({
      data: {
        ...rest,
        candidate: {
          connect: {
            userId
          }
        },
        levelEducation: {
          connect: {
            id: levelId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.education.findMany({
      where: {
        candidate: { userId }
      },
      include: {
        levelEducation: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
  }

  async update(id: string, userId: string, updateEducationDto: UpdateEducationDto) {
    return await this.prisma.education.updateMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      },
      data: {
        ...updateEducationDto
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.education.deleteMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      }
    })
  }
}
