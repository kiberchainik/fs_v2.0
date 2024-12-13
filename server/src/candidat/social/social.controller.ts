import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) { }

  @Post()
  @Authorization(UserRole.CANDIDAT)
  create(
    @CurrentUser('id') userId: string,
    @Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(userId, createSocialDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  findAll(@CurrentUser('id') userId: string) {
    return this.socialService.findAll(userId)
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDAT)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateSocialDto: UpdateSocialDto
  ) {
    return this.socialService.update(userId, id, updateSocialDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDAT)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.socialService.remove(userId, id);
  }
}
