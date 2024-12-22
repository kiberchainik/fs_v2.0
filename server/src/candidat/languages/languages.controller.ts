import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) { }

  @Post()
  @Authorization(UserRole.CANDIDATE)
  create(
    @CurrentUser('id') userId: string,
    @Body() createLanguageDto: CreateLanguageDto
  ) {
    return this.languagesService.create(userId, createLanguageDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDATE)
  findAll(@CurrentUser('id') userId: string) {
    return this.languagesService.findAll(userId);
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDATE)
  update(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languagesService.update(id, userId, updateLanguageDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDATE)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.languagesService.remove(id, userId);
  }
}
