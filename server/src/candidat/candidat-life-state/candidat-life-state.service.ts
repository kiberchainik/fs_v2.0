import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCandidatLifeStateDto } from './dto/create-candidat-life-state.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CandidatLifeStateService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createCandidatLifeStateDto: CreateCandidatLifeStateDto) {
    const cdId = await this.prisma.candidatData.findUnique({
      where: {
        userId
      },
      select: {
        id: true
      }
    })

    if (!cdId) throw new BadRequestException('Complite privacy please!')

    return await this.prisma.candidatLifeState.upsert({
      where: {
        cdId: cdId.id
      },
      update: {
        ...createCandidatLifeStateDto
      },
      create: {
        ...createCandidatLifeStateDto,
        candidate: {
          connect: {
            userId
          }
        }
      }
    })
  }

  async findOne(userId: string) {
    return await this.prisma.candidatLifeState.findFirst({
      where: {
        candidate: {
          userId
        }
      }
    })
  }

  async remove(userId: string) {
    return await this.prisma.candidatLifeState.deleteMany({
      where: {
        candidate: {
          userId
        }
      }
    })
  }
}
