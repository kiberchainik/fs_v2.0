import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  @Authorization(UserRole.CANDIDATE)
  create(
    @CurrentUser('id') userId: string,
    @Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(userId, createCourseDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDATE)
  findAll(@CurrentUser('id') userId: string) {
    return this.coursesService.findAll(userId);
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDATE)
  update(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, userId, updateCourseDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDATE)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string) {
    return this.coursesService.remove(id, userId)
  }
}
