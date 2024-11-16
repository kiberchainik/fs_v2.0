import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { slugify } from '@/utils';
import { FileResponse } from '@/libs/file/file.service';
import { join } from 'path';
import { unlink } from 'fs/promises';

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

    if (oldData.logo !== null) oldData.logo.map(file => {
      if (join(__dirname, '..', '../src', file)) unlink(join(__dirname, '..', '../src', file))
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

  async agencyDatabySlug(slug: string) {
    return await this.prisma.agencyData.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            email: true,
          }
        },
        branch: true,
        jobOffers: true
      }
    })
  }

  findAll() {
    return `This action returns all agency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agency`;
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: number) {
    return `This action removes a #${id} agency`;
  }
}
