import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createCourseDto: CreateCourseDto) {
    return await this.prisma.courses.create({
      data: {
        ...createCourseDto,
        candidate: {
          connect: {
            userId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.courses.findMany({
      where: {
        candidate: {
          userId
        }
      }
    })
  }

  async update(id: string, userId: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.courses.updateMany({
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
        ...updateCourseDto
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.courses.deleteMany({
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
