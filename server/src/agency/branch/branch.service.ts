import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { FileResponse } from '@/libs/file/file.service';

@Injectable()
export class BranchService {
  constructor(private readonly prisma:PrismaService){}
  
  async create(userId:string, createBranchDto: CreateBranchDto) {
    const {id} = await this.getAgencyDataId(userId)

    if(!id) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
      return await this.prisma.branch.create({
        data: {
          adId: id,
          ...createBranchDto
        }
      })
  }

  async findAll(userId:string) {
    return await this.prisma.branch.findMany({
      where: {
        agency: {userId}
      }
    })
  }

  async getById(idBranch:string, userId:string) {
    return await this.prisma.branch.findMany({
      where: {
        AND: [{id: idBranch}, {agency: {userId}}]
      }
    })
  }

  async update(id: string, userId:string, updateBranchDto: UpdateBranchDto) {
    return await this.prisma.branch.updateMany({
      where: {
        AND: [
          {id},
          {agency: {userId}}
        ]
      },
      data: {
        ...updateBranchDto
      }
    })
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
    return await this.prisma.branch.deleteMany({
      where: {
        AND: [
          {id},
          {agency: {userId}}
        ]
      }
    })
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
