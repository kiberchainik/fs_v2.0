import { Injectable } from '@nestjs/common';
import { CreateExperienceMinimalDto } from './dto/create-experience-minimal.dto';
import { UpdateExperienceMinimalDto } from './dto/update-experience-minimal.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ExperienceMinimalService {
  constructor(private readonly prisma:PrismaService) {}

  async create(createExperienceMinimalDto: CreateExperienceMinimalDto) {
    return await this.prisma.experienceMinimalJob.create({
      data: {
        ...createExperienceMinimalDto
      }
    })
  }

  async findAll() {
    return await this.prisma.experienceMinimalJob.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.experienceMinimalJob.findUnique({
      where: {id}
    })
  }

  async update(id: string, updateExperienceMinimalDto: UpdateExperienceMinimalDto) {
    return await this.prisma.experienceMinimalJob.update({
      where: {id},
      data: {
        ...updateExperienceMinimalDto
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.experienceMinimalJob.delete({
      where: {id}
    })
  }
}
