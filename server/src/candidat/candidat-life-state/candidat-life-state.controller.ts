import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidatLifeStateService } from './candidat-life-state.service';
import { CreateCandidatLifeStateDto } from './dto/create-candidat-life-state.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@Controller('life-state')
export class CandidatLifeStateController {
  constructor(private readonly candidatLifeStateService: CandidatLifeStateService) { }

  @Post()
  @Authorization(UserRole.CANDIDATE)
  create(
    @CurrentUser('id') userId: string,
    @Body() createCandidatLifeStateDto: CreateCandidatLifeStateDto
  ) {
    return this.candidatLifeStateService.create(userId, createCandidatLifeStateDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDATE)
  findOne(
    @CurrentUser('id') userId: string
  ) {
    return this.candidatLifeStateService.findOne(userId);
  }

  @Delete()
  @Authorization(UserRole.CANDIDATE)
  remove(
    @CurrentUser('id') userId: string
  ) {
    return this.candidatLifeStateService.remove(userId);
  }
}
