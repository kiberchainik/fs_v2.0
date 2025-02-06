import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCandidatDto } from './dto/create-candidat.dto';
import { UpdateCandidatDto } from './dto/update-candidat.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { join } from 'path';
import { unlink, access } from 'fs/promises';
import { FileResponse } from '@/libs/file/file.service'

@Injectable()
export class CandidatService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async findAll() {
    return await this.prisma.candidatData.findMany({
      select: {
        id: true,
        birthday: true,
        avatar: true,
        firstname: true,
        surname: true,
        user: {
          select: {
            email: true
          }
        },
        education: {
          select: {
            grade: true,
          }
        },
        skills: {
          select: {
            skill: true
          }
        }
      }
    })
  }

  async getCarouselCandidats(limit: number) {
    return await this.prisma.candidatData.findMany({
      take: limit,
      select: {
        avatar: true,
        firstname: true,
        surname: true,
        user: {
          select: {
            email: true
          }
        },
        education: {
          select: {
            grade: true,
          }
        },
        skills: {
          select: {
            skill: true
          }
        }
      }
    })
  }

  async getCandidatPrivacy(id: string) {
    return await this.prisma.candidatData.findUnique({
      where: {
        userId: id
      }
    })
  }

  async update(id: string, updateCandidatDto: UpdateCandidatDto) {
    const _data = {
      firstname: updateCandidatDto.name,
      surname: updateCandidatDto.lastname,
      birthday: updateCandidatDto.birthday,
      avatar: updateCandidatDto.avatar,
      phone: updateCandidatDto.phone,
      resident: updateCandidatDto.resident,
      about_my: updateCandidatDto.about_my,
      userId: id
    }

    const oldData = await this.prisma.candidatData.findFirst({
      where: { userId: id }
    })

    const candidat = await this.prisma.candidatData.upsert({
      where: {
        userId: id
      },
      update: _data,
      create: _data
    })

    if (!candidat) {
      throw new BadRequestException('Не удалось сохранить данные')
    }

    if (oldData && oldData.avatar !== undefined) oldData.avatar.map(file => {
      access(join(__dirname, '..', '../src', file)).then(() => {
        unlink(join(__dirname, '..', '../src', file))
      })
    })

    return candidat
  }

  async updAvatar(userId: string, files: FileResponse[]) {
    const avatar = await this.prisma.candidatData.update({
      where: {
        userId
      },
      data: {
        avatar: files.map(file => file.url)
      }
    })

    if (!avatar) {
      return new BadRequestException('Upload error!')
    }

    return avatar
  }

  remove(id: string) {
    return `This action removes a #${id} candidat`;
  }
}
