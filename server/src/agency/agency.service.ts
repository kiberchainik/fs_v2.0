import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PaginationQueryDto, slugify } from '@/utils';
import { FileResponse } from '@/libs/file/file.service';
import { join } from 'path';
import { access, unlink } from 'fs/promises';
import { UserRole } from '@prisma/client';
import { returnCategoryBaseObject } from '@/admin/category/dto';

@Injectable()
export class AgencyService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(userId: string, regDto: CreateAgencyDto) {
    const _data = {
      agency_name: regDto.agency_name,
      slug: slugify(regDto.agency_name),
      address: regDto.address,
      phone: regDto.phone,
      p_iva_c_f: regDto.p_iva_c_f,
      about: regDto.about,
      logo: regDto.logo,
      url: regDto.url,
      userId
    }

    const oldData = await this.prisma.agencyData.findFirst({
      where: { userId }
    })


    const agencyData = await this.prisma.agencyData.upsert({
      where: { userId },
      update: _data,
      create: _data
    })

    if (!agencyData) {
      throw new BadRequestException('Не удалось сохранить данные')
    }

    if (oldData && oldData.logo !== undefined) oldData.logo.map(file => {
      access(join(__dirname, '..', '../src', file)).then(() => {
        unlink(join(__dirname, '..', '../src', file))
      })
    })

    return agencyData
  }

  async updLogo(userId: string, files: FileResponse[]) {
    const logo = await this.prisma.agencyData.update({
      where: {
        userId
      },
      data: {
        logo: files.map(file => file.url)
      }
    })

    if (!logo) {
      return new BadRequestException('Upload error!')
    }

    return logo
  }

  async agencyData(userId: string) {
    return await this.prisma.agencyData.findUnique({
      where: { userId }
    })
  }

  async getAgenciesForCarousel(limit: number) {
    return await this.prisma.agencyData.findMany({
      take: limit,
      select: {
        agency_name: true,
        logo: true,
        slug: true,
        url: true,
        about: true,
        address: true,
        phone: true,
        user: {
          select: {
            email: true
          }
        }
      }
    })
  }

  async agencyDataBySlug(slug: string, { page, limit }: PaginationQueryDto) {
    const [agencyData, jobsCount] = await this.prisma.$transaction([
      this.prisma.agencyData.findFirst({
        where: { slug },
        include: {
          user: {
            select: {
              email: true,
              ratings: true
            }
          },
          branch: true,
          jobOffers: {
            include: {
              categories: {
                include: {
                  parent: {
                    select: returnCategoryBaseObject
                  }
                }
              }
            }
          }
        },
        skip: (page - 1) * limit,
        take: limit
      }),

      this.prisma.jobOffers.count({
        where: {
          agency: {
            slug
          }
        }
      })
    ])

    if (!agencyData) return false

    const pageCount = Math.ceil(jobsCount / limit)

    return {
      agencyData,
      count: jobsCount,
      pageCount
    }
  }

  async findMetadataBySlug(slug: string) {
    const agencyData = await this.prisma.agencyData.findFirst({
      where: { slug },
      select: {
        agency_name: true,
        about: true,
        logo: true
      }
    })

    if (!agencyData) return false

    return agencyData
  }

  async findAll({ page, limit }: PaginationQueryDto) {
    const [agencies, agenciesCount] = await this.prisma.$transaction([
      this.prisma.agencyData.findMany({
        where: {
          user: {
            role: UserRole.AGENCY
          }
        },
        select: {
          agency_name: true,
          about: true,
          address: true,
          logo: true,
          phone: true,
          slug: true,
          createdAt: true,
          user: {
            select: {
              email: true,
              ratings: true
            }
          }
        },
        skip: (page - 1) * limit,
        take: limit
      }),

      this.prisma.agencyData.count({
        where: {
          user: {
            role: UserRole.AGENCY
          }
        }
      })
    ])

    if (!agencies) return false

    const pageCount = Math.ceil(agenciesCount / limit)

    return {
      agencies,
      count: agenciesCount,
      pageCount
    }
  }

  findOne(id: string) {
    return `This action returns a #${id} agency`;
  }

  update(id: string, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: string) {
    return `This action removes a #${id} agency`;
  }
}
