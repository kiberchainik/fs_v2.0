import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { FileResponse } from '@/libs/file/file.service';

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createBranchDto: CreateBranchDto) {
    const { id } = await this.getAgencyDataId(userId)

    if (!id) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')
    return await this.prisma.branch.create({
      data: {
        adId: id,
        ...createBranchDto
      }
    })
  }

  async createPackage(userId: string, arrayBranch: CreateBranchDto[]) {
    const batchSize: number = 500
    const delay: number = 1000
    const startIndex: number = 0 // Индекс начала добавления
    const { id } = await this.getAgencyDataId(userId)

    if (!id) throw new BadRequestException('Для добавления филиалов и объявлений заполните полнотью профиль!')

    for (let i = startIndex; i < arrayBranch.length; i += batchSize) {
      const batch = arrayBranch.slice(i, i + batchSize)

      try {
        // const result = await this.prisma.branch.createMany({
        //   data: {
        //     adId: id,
        //     ...batch
        //   },
        //   skipDuplicates: false
        // });
        //console.log(`Добавлено ${result.count} записей в пакете начиная с индекса ${i}`);

        // Таймаут между запросами
        await new Promise(resolve => setTimeout(resolve, delay));
      } catch (error) {
        console.error(`Ошибка при добавлении пользователей на индексе ${i}:`, error);

        // Сохраняем индекс, с которого нужно продолжить
        await this.prisma.$disconnect();
        // Перезапускаем функцию с нового индекса
        //await addUsersInBatches(users, batchSize, delay, i);
        break; // Выходим из текущего цикла, чтобы избежать двойного вызова
      }
    }
  }


  async findAll(userId: string) {
    return await this.prisma.branch.findMany({
      where: {
        agency: { userId }
      }
    })
  }

  async getById(idBranch: string, userId: string) {
    return await this.prisma.branch.findFirst({
      where: {
        AND: [{ id: idBranch }, { agency: { userId } }]
      }
    })
  }

  async update(id: string, userId: string, updateBranchDto: UpdateBranchDto) {
    return await this.prisma.branch.updateMany({
      where: {
        AND: [
          { id },
          { agency: { userId } }
        ]
      },
      data: {
        ...updateBranchDto
      }
    })
  }

  async updLogo(id: string, fileData: FileResponse[]) {
    return await this.prisma.branch.update({
      where: { id },
      data: {
        logo: fileData[0].url
      }
    })
  }

  async remove(id: string, userId: string) {
    return await this.prisma.branch.deleteMany({
      where: {
        AND: [
          { id },
          { agency: { userId } }
        ]
      }
    })
  }

  async deleteMany(ids: string[], userId: string) {
    return await this.prisma.branch.deleteMany({
      where: {
        AND: [
          {
            id: {
              in: ids
            }
          },
          { agency: { userId } }
        ]
      }
    })
  }

  private async getAgencyDataId(userId: string) {
    return await this.prisma.agencyData.findUnique({
      where: {
        userId
      },
      select: {
        id: true
      }
    })
  }
}
