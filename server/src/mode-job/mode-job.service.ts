import { Injectable } from '@nestjs/common';
import { CreateModeJobDto } from './dto/create-mode-job.dto';
import { UpdateModeJobDto } from './dto/update-mode-job.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ModeJobService {
  constructor (private readonly prisma: PrismaService) {}

  async create(createModeJobDto: CreateModeJobDto) {
    return await this.prisma.modeJob.create({
      data: {
        ...createModeJobDto
      }
    })
  }

  async findAll() {
    return await this.prisma.modeJob.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.modeJob.findFirst({
      where: {id}
    })
  }

  async update(id: string, updateModeJobDto: UpdateModeJobDto) {
    return await this.prisma.modeJob.update({
      where: {id},
      data: {...updateModeJobDto}
    })
  }

  async remove(id: string) {
    return await this.prisma.modeJob.delete({
      where: {id}
    })
  }
}
