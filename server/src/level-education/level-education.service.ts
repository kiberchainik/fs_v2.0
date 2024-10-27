import { Injectable } from '@nestjs/common';
import { CreateLevelEducationDto } from './dto/create-level-education.dto';
import { UpdateLevelEducationDto } from './dto/update-level-education.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class LevelEducationService {
  constructor (private readonly prisma:PrismaService) {}
  
  async create(createLevelEducationDto: CreateLevelEducationDto) {
    return await this.prisma.levelEducation.create({
      data: {
        ...createLevelEducationDto
      }
    })
  }

  async findAll() {
    return await this.prisma.levelEducation.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.levelEducation.findUnique({
      where: {id}
    })
  }

  async update(id: string, updateLevelEducationDto: UpdateLevelEducationDto) {
    return await this.prisma.levelEducation.update({
      where: {id},
      data: {
        ...updateLevelEducationDto
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.levelEducation.delete({
      where: {id}
    })
  }
}
