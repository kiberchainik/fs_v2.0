import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SavedJobsService } from './saved-jobs.service';
import { CreateSavedJobDto } from './dto/create-saved-job.dto'
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('saved-jobs')
export class SavedJobsController {
  constructor(private readonly savedJobsService: SavedJobsService) {}

  @Post()
  @Authorization(UserRole.CANDIDAT)
  async saveJob(
    @Body() jobId: CreateSavedJobDto,
    @CurrentUser('id') userId: string,
  ) {
    return await this.savedJobsService.saveJob(userId, jobId);
  }

  @Delete(':jobId')
  @Authorization(UserRole.CANDIDAT)
  async removeFromSaved(
    @Param('jobId') jobId: CreateSavedJobDto,
    @CurrentUser('id') userId: string,
  ) {
    return await this.savedJobsService.removeFromSaved(userId, jobId);
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  async getSavedJobs(@CurrentUser('id') userId: string) {
    return await this.savedJobsService.getSavedJobs(userId);
  }
}
