import { Module } from '@nestjs/common'
import { JoboffersService } from './joboffers.service'
import { JoboffersController } from './joboffers.controller'
import { CategoryService } from 'src/category/category.service'
import { PrismaService } from '@/prisma/prisma.service'

@Module({
  controllers: [JoboffersController],
  providers: [JoboffersService, PrismaService, CategoryService],
})
export class JoboffersModule {}
