import { Injectable } from '@nestjs/common';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class WorkingTimeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWorkingTimeDto: CreateWorkingTimeDto) {
    return await this.prisma.workingTimeJob.create({
      data: {
        name: createWorkingTimeDto.name
      }
    })
  }

  async findAll() {
    return await this.prisma.workingTimeJob.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.workingTimeJob.findUnique({
      where: {id}
    })
  }

  async update(id: string, updateWorkingTimeDto: UpdateWorkingTimeDto) {
    return await this.prisma.workingTimeJob.update({
      where: {id},
      data: {
        name: updateWorkingTimeDto.name
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.workingTimeJob.delete({
      where: {id}
    })
  }
}
