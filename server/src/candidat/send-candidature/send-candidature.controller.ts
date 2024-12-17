import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { SendCandidatureService } from './send-candidature.service'
import { CreateSendCandidatureDto } from './dto/create-send-candidature.dto'
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UserRole } from 'prisma/__generated__'

@Controller('send-candidature')
export class SendCandidatureController {
  constructor(private readonly sendCandidatureService: SendCandidatureService) { }

  @Post()
  @Authorization(UserRole.CANDIDAT)
  async saveJob(
    @Body() jobId: CreateSendCandidatureDto,
    @CurrentUser('id') userId: string,
  ) {
    return await this.sendCandidatureService.sendCandidature(userId, jobId);
  }

  @Delete(':jobId')
  @Authorization(UserRole.CANDIDAT)
  async removeFromSaved(
    @Param('jobId') jobId: CreateSendCandidatureDto,
    @CurrentUser('id') userId: string,
  ) {
    return await this.sendCandidatureService.removeCandidateFromJob(userId, jobId);
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  async getSendetCandidature(@CurrentUser('id') userId: string) {
    return await this.sendCandidatureService.getCandidatureJobs(userId);
  }
}
