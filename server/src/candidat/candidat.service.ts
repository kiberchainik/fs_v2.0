import { BadRequestException, Injectable } from '@nestjs/common'
import { UpdateCandidatDto } from './dto/update-candidat.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { join } from 'path'
import { unlink, access } from 'fs/promises'
import { FileResponse } from '@/libs/file/file.service'
import { PaginationQueryDto } from '@/libs/common/utils'
import { UserRole } from '@prisma/client'

@Injectable()
export class CandidatService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async findAll({ page, limit }: PaginationQueryDto) {
    const [candidats, candidatCount] = await this.prisma.$transaction([
      this.prisma.candidatData.findMany({
        select: {
          id: true,
          birthday: true,
          avatar: true,
          firstname: true,
          surname: true,
          user: {
            select: {
              email: true,
              login: true
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
        },
        skip: (page - 1) * limit,
        take: limit
      }),

      this.prisma.candidatData.count({
        where: {
          user: {
            role: UserRole.CANDIDATE
          }
        }
      })
    ])

    if (!candidats) return false

    const pageCount = Math.ceil(candidatCount / limit)

    return {
      candidats,
      count: candidatCount,
      pageCount
    }

  }

  async getCarouselCandidats(limit: number) {
    return await this.prisma.candidatData.findMany({
      take: limit,
      select: {
        avatar: true,
        firstname: true,
        surname: true,
        about_my: true,
        user: {
          select: {
            email: true,
            login: true
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

  async getCandidatByEmail(login: string) {
    return await this.prisma.candidatData.findMany({
      where: {
        user: {
          login
        }
      },
      select: {
        about_my: true,
        avatar: true,
        birthday: true,
        candidatLifeState: {
          omit: {
            cdId: true,
            id: true,
          }
        },
        firstname: true,
        surname: true,
        phone: true,
        resident: true,
        jobContacts: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            email: true,
            login: true,
            social: {
              select: {
                socialLink: true
              }
            }
          }
        },
        education: {
          select: {
            grade: true,
            startdate: true,
            enddate: true,
            description: true
          }
        },
        experience: {
          select: {
            company: true,
            description: true,
            startDate: true,
            position: true,
            endDate: true,
            location: true,
            contractTypeJob: {
              select: {
                name: true
              }
            }
          }
        },
        skills: {
          select: {
            skill: true
          }
        },
        courses: {
          select: {
            course: true,
            enddate: true,
            startdate: true,
            grade: true,
          }
        },
        hobbies: {
          select: {
            hobbie: true
          }
        },
        languages: {
          select: {
            language: true,
            level: true
          }
        },
      }
    })
  }

  async getCandidatMetaDate(login: string) {
    return await this.prisma.candidatData.findMany({
      where: {
        user: {
          login
        }
      },
      select: {
        about_my: true,
        avatar: true,
        firstname: true,
        surname: true
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
