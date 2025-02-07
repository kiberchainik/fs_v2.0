import { Module } from '@nestjs/common'
import { JoboffersService } from './joboffers.service'
import { JoboffersController } from './joboffers.controller'
import { CategoryService } from 'src/admin/category/category.service'
import { PrismaService } from '@/prisma/prisma.service'
import { LastProcessIndexService } from '@/libs/common/utils'

@Module({
  controllers: [JoboffersController],
  providers: [JoboffersService, PrismaService, CategoryService, LastProcessIndexService],
})
export class JoboffersModule { }
