import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceMinimalService } from './experience-minimal.service';
import { CreateExperienceMinimalDto } from './dto/create-experience-minimal.dto';
import { UpdateExperienceMinimalDto } from './dto/update-experience-minimal.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('experience-minimal')
export class ExperienceMinimalController {
  constructor(private readonly experienceMinimalService: ExperienceMinimalService) {}

  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createExperienceMinimalDto: CreateExperienceMinimalDto) {
    return this.experienceMinimalService.create(createExperienceMinimalDto);
  }

  @Get()
  findAll() {
    return this.experienceMinimalService.findAll();
  }

  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceMinimalService.findOne(id);
  }

  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienceMinimalDto: UpdateExperienceMinimalDto) {
    return this.experienceMinimalService.update(id, updateExperienceMinimalDto);
  }

  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceMinimalService.remove(id);
  }
}
