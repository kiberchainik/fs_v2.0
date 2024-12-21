import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) { }

  @Post()
  @Authorization(UserRole.CANDIDATE)
  create(
    @CurrentUser('id') userId: string,
    @Body() createEducationDto: CreateEducationDto
  ) {
    return this.educationService.create(userId, createEducationDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDATE)
  findAll(@CurrentUser('id') userId: string) {
    return this.educationService.findAll(userId);
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDATE)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto
  ) {
    return this.educationService.update(id, userId, updateEducationDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDATE)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.educationService.remove(id, userId);
  }
}
