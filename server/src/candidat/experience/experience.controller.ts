import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) { }

  @Post()
  @Authorization(UserRole.CANDIDAT)
  create(
    @CurrentUser('id') userId: string,
    @Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(userId, createExperienceDto)
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  findAll(@CurrentUser('id') userId: string) {
    return this.experienceService.findAll(userId)
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDAT)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto) {
    return this.experienceService.update(id, userId, updateExperienceDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDAT)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string) {
    return this.experienceService.remove(id, userId);
  }
}
