import { Module } from '@nestjs/common';
import { SendCandidatureService } from './send-candidature.service';
import { SendCandidatureController } from './send-candidature.controller';

@Module({
  controllers: [SendCandidatureController],
  providers: [SendCandidatureService],
})
export class SendCandidatureModule {}
