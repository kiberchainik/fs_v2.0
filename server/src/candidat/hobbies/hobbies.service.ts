import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class HobbiesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createHobbyDto: CreateHobbyDto) {
    return await this.prisma.hobbies.create({
      data: {
        hobbie: createHobbyDto.hobbie,
        candidate: {
          connect: {
            userId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.hobbies.findMany({
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

  async update(id: string, userId: string, updateHobbyDto: UpdateHobbyDto) {
    return await this.prisma.hobbies.updateMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      },
      data: {
        hobbie: updateHobbyDto.hobbie
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.hobbies.deleteMany({
      where: {
        AND: [
          { candidate: { userId } },
          { id }
        ]
      }
    })
  }
}
