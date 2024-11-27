import { Module } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { CandidatController } from './candidat.controller';
import { FileService } from '@/libs/file/file.service';

@Module({
  controllers: [CandidatController],
  providers: [CandidatService, FileService],
})
export class CandidatModule { }
