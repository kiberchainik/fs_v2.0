import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createLanguageDto: CreateLanguageDto) {
    return await this.prisma.languages.create({
      data: {
        language: createLanguageDto.language,
        level: createLanguageDto.level,
        candidate: {
          connect: { userId }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.languages.findMany({
      where: {
        candidate: {
          userId
        }
      }
    })
  }

  async update(id: string, userId: string, updateLanguageDto: UpdateLanguageDto) {
    return await this.prisma.languages.updateMany({
      where: {
        AND: [
          {
            candidate: {
              userId
            }
          },
          {
            id
          }
        ]
      },
      data: {
        language: updateLanguageDto.language,
        level: updateLanguageDto.level
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.languages.deleteMany({
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
