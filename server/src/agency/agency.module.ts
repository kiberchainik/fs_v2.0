import { Module } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { FileService } from '@/libs/file/file.service';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [AgencyController],
  providers: [AgencyService, FileService, UserService],
  exports: [AgencyService]
})
export class AgencyModule {}