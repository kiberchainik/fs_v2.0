import { Injectable } from '@nestjs/common';
import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ContractTypeService {
  constructor (private readonly prisma:PrismaService) {}

  async create(createContractTypeDto: CreateContractTypeDto) {
    return await this.prisma.contractTypeJob.create({
      data: {
        ...createContractTypeDto
      }
    })
  }

  async findAll() {
    return await this.prisma.contractTypeJob.findMany()
  }

  async findOne(id: string) {
    return this.prisma.contractTypeJob.findUnique(({
      where: {id}
    }))
  }

  async update(id: string, updateContractTypeDto: UpdateContractTypeDto) {
    return await this.prisma.contractTypeJob.update({
      where: {id},
      data: {
        ...updateContractTypeDto
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.contractTypeJob.delete({
      where:{id}
    })
  }
}
