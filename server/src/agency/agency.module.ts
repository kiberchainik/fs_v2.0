import { Module } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { FileService } from '@/libs/file/file.service';
import { UserService } from '@/user/user.service';
import { JoboffersModule } from './joboffers/joboffers.module';
import { BranchModule } from './branch/branch.module';

@Module({
  controllers: [AgencyController],
  providers: [AgencyService, FileService, UserService],
  exports: [AgencyService],
  imports: [JoboffersModule, BranchModule]
})
export class AgencyModule {}