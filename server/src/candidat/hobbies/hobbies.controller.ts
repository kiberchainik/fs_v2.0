import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) { }

  @Post()
  @Authorization(UserRole.CANDIDAT)
  create(
    @CurrentUser('id') userId: string,
    @Body() createHobbyDto: CreateHobbyDto
  ) {
    return this.hobbiesService.create(userId, createHobbyDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  findAll(@CurrentUser('id') userId: string) {
    return this.hobbiesService.findAll(userId);
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDAT)
  update(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() updateHobbyDto: UpdateHobbyDto) {
    return this.hobbiesService.update(id, userId, updateHobbyDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDAT)
  remove(
    @Param('id') id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.hobbiesService.remove(id, userId);
  }
}
