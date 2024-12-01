import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class SkillsService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(id: string, createSkillDto: CreateSkillDto) {
    return await this.prisma.skills.create({
      data: {
        skill: createSkillDto.skill,
        level: createSkillDto.level,
        candidate: {
          connect: {
            userId: id
          }
        }
      }
    })
  }

  async findAll(id: string) {
    return await this.prisma.skills.findMany({
      where: {
        candidate: {
          user: {
            id
          }
        }
      }
    })
  }

  async update(userId: string, id: string, updateSkillDto: UpdateSkillDto) {
    return await this.prisma.skills.updateMany({
      where: {
        AND: [
          {
            candidate: {
              userId
            }
          },
          { id }
        ]
      },
      data: {
        skill: updateSkillDto.skill,
        level: updateSkillDto.level
      }
    })
  }

  async remove(userId: string, id: string) {
    return await this.prisma.skills.deleteMany({
      where: {
        AND: [
          {
            candidate: {
              userId
            }
          },
          { id }
        ]
      }
    })
  }
}
