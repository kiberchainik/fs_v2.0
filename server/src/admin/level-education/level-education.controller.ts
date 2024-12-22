import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LevelEducationService } from './level-education.service';
import { CreateLevelEducationDto } from './dto/create-level-education.dto';
import { UpdateLevelEducationDto } from './dto/update-level-education.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@Controller('level-education')
export class LevelEducationController {
  constructor(private readonly levelEducationService: LevelEducationService) { }

  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createLevelEducationDto: CreateLevelEducationDto) {
    return this.levelEducationService.create(createLevelEducationDto);
  }

  @Get()
  findAll() {
    return this.levelEducationService.findAll();
  }

  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.levelEducationService.findOne(id);
  }

  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevelEducationDto: UpdateLevelEducationDto) {
    return this.levelEducationService.update(id, updateLevelEducationDto);
  }

  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.levelEducationService.remove(id);
  }
}
