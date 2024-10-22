import { Module } from '@nestjs/common'
import { BranchService } from './branch.service'
import { BranchController } from './branch.controller'
import { PrismaService } from '@/prisma/prisma.service'
import { FileService } from '@/libs/file/file.service'

@Module({
  controllers: [BranchController],
  providers: [BranchService, PrismaService, FileService],
})
export class BranchModule {}
