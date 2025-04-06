import { Controller, Post, Body } from '@nestjs/common';
import { JobParserService } from './job-parser.service';
import { ApiExcludeController } from '@nestjs/swagger';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@ApiExcludeController()
@Controller('jobs')
export class JobParserController {
  constructor(private readonly jobParserService: JobParserService) { }

  @Post('parse/randstad')
  //@Authorization(UserRole.ADMIN)
  async parseJobsRandstad(@Body('urls') urls: string[]) {
    if (!Array.isArray(urls) || urls.length === 0) {
      return { error: 'Массив ссылок пуст или отсутствует' };
    }

    const jobs = await Promise.all(
      urls.map(async url => await this.jobParserService.parseJobRandstad(url)),
    );

    return jobs.filter(job => job !== null)
  }

  @Post('parse/manpower')
  @Authorization(UserRole.ADMIN)
  async parseJobsManpower(@Body('urls') urls: string[]) {
    if (!Array.isArray(urls) || urls.length === 0) {
      return { error: 'Массив ссылок пуст или отсутствует' };
    }

    const jobs = await Promise.all(
      urls.map(async url => await this.jobParserService.parseJobManpower(url)),
    );

    return jobs.filter(job => job !== null)
  }
}