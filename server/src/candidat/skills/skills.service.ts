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

  update(id: string, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: string) {
    return `This action removes a #${id} skill`;
  }
}
