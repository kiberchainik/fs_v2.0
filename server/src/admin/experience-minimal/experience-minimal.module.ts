import { Module } from '@nestjs/common';
import { ExperienceMinimalService } from './experience-minimal.service';
import { ExperienceMinimalController } from './experience-minimal.controller';

@Module({
  controllers: [ExperienceMinimalController],
  providers: [ExperienceMinimalService],
})
export class ExperienceMinimalModule {}
