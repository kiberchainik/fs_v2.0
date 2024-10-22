import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { FileResponse } from '@/libs/file/file.service';

@Injectable()
export class BranchService {
  constructor(private readonly prisma:PrismaService){}
  
  async create(userId:string, createBranchDto: CreateBranchDto) {
    const adId = await this.getAgencyDataId(userId)

    if(!adId) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
    if(typeof adId === 'string') {
      return await this.prisma.branch.create({
        data: {
          adId,
          ...createBranchDto
        }
      })
    }
  }

  async findAll(userId:string) {
    const adId = await this.getAgencyDataId(userId)

    if(!adId) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
    if(typeof adId === 'number') {
      return await this.prisma.branch.findMany({
        where: {
          adId
        }
      })
    }
  }

  async update(id: string, userId:string, updateBranchDto: UpdateBranchDto) {
    const adId = await this.getAgencyDataId(userId)

    if(!adId) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
    if(typeof adId === 'number') {
      return await this.prisma.branch.updateMany({
        where: {
          AND: [
            {id},
            {adId}
          ]
        },
        data: {
          ...updateBranchDto
        }
      })
    }
  }

  async updLogo (id:string, fileData:FileResponse[]) {
    return await this.prisma.branch.update({
      where: {id},
      data: {
        logo: fileData[0].url
      }
    })
  }

  async remove(id: string, userId:string) {
    const adId = await this.getAgencyDataId(userId)

    if(!adId) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
    if(typeof adId === 'string') {
      return await this.prisma.branch.deleteMany({
        where: {
          AND: [
            {id},
            {adId}
          ]
        }
      })
    }
  }

  private async getAgencyDataId (userId:string) {
    return await this.prisma.agencyData.findUnique({
      where:{
        userId
      },
      select: {
        id: true
      }
    })
  }
}
