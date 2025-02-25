import { Module } from '@nestjs/common';
import { JobParserService } from './job-parser.service';
import { JobParserController } from './job-parser.controller';

@Module({
  controllers: [JobParserController],
  providers: [JobParserService],
})
export class JobParserModule {}
