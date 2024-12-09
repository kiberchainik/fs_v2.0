import { Module } from '@nestjs/common';
import { CandidatLifeStateService } from './candidat-life-state.service';
import { CandidatLifeStateController } from './candidat-life-state.controller';

@Module({
  controllers: [CandidatLifeStateController],
  providers: [CandidatLifeStateService],
})
export class CandidatLifeStateModule {}
