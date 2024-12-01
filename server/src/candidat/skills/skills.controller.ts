import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Post()
  @Authorization(UserRole.CANDIDAT)
  create(
    @CurrentUser('id') id: string,
    @Body() createSkillDto: CreateSkillDto
  ) {
    return this.skillsService.create(id, createSkillDto);
  }

  @Get()
  @Authorization(UserRole.CANDIDAT)
  findAll(@CurrentUser('id') id: string) {
    return this.skillsService.findAll(id);
  }

  @Patch(':id')
  @Authorization(UserRole.CANDIDAT)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto
  ) {
    return this.skillsService.update(userId, id, updateSkillDto);
  }

  @Delete(':id')
  @Authorization(UserRole.CANDIDAT)
  remove(
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.skillsService.remove(userId, id);
  }
}
