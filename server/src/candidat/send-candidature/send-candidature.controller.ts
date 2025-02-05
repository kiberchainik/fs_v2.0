import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { SendCandidatureService } from './send-candidature.service'
import { CreateSendCandidatureDto } from './dto/create-send-candidature.dto'
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UserRole } from '@prisma/client'
import { ApiExcludeController } from '@nestjs/swagger'

@ApiExcludeController()
@Controller('send-candidature')
export class SendCandidatureController {
  constructor(private readonly sendCandidatureService: SendCandidatureService) { }

  @Post()
  @Authorization(UserRole.CANDIDATE)
  async saveJob(
    @Body() jobId: CreateSendCandidatureDto,
    @CurrentUser('id') userId: string,
  ) {
    return await this.sendCandidatureService.sendCandidature(userId, jobId);
  }

  @Delete(':jobId')
  @Authorization(UserRole.CANDIDATE)
  async removeFromSaved(
    @Param('jobId') jobId: string,
    @CurrentUser('id') userId: string,
  ) {
    return await this.sendCandidatureService.removeCandidateFromJob(userId, jobId);
  }

  @Get()
  @Authorization(UserRole.CANDIDATE)
  async getSendetCandidature(@CurrentUser('id') userId: string) {
    return await this.sendCandidatureService.getCandidatureJobs(userId);
  }
}
