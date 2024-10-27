import { Module } from '@nestjs/common';
import { LevelEducationService } from './level-education.service';
import { LevelEducationController } from './level-education.controller';

@Module({
  controllers: [LevelEducationController],
  providers: [LevelEducationService],
})
export class LevelEducationModule {}
