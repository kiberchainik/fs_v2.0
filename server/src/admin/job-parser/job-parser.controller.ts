import { Controller, Post, Body } from '@nestjs/common';
import { JobParserService } from './job-parser.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('jobs')
export class JobParserController {
  constructor(private readonly jobParserService: JobParserService) {}

  @Post('parse')
  async parseJobs(@Body('urls') urls: string[]) {
    if (!Array.isArray(urls) || urls.length === 0) {
      return { error: 'Массив ссылок пуст или отсутствует' };
    }

    const jobs = await Promise.all(
      urls.map(async url => await this.jobParserService.parseJob(url)),
    );

    return jobs.filter(job => job !== null)
  }
}