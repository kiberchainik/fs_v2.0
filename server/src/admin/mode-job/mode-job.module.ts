import { Module } from '@nestjs/common';
import { ModeJobService } from './mode-job.service';
import { ModeJobController } from './mode-job.controller';

@Module({
  controllers: [ModeJobController],
  providers: [ModeJobService],
})
export class ModeJobModule {}
