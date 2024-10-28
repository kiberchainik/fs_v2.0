import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModeJobService } from './mode-job.service';
import { CreateModeJobDto } from './dto/create-mode-job.dto';
import { UpdateModeJobDto } from './dto/update-mode-job.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('mode-job')
export class ModeJobController {
  constructor(private readonly modeJobService: ModeJobService) {}

  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createModeJobDto: CreateModeJobDto) {
    return this.modeJobService.create(createModeJobDto);
  }

  @Get()
  findAll() {
    return this.modeJobService.findAll();
  }

  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeJobService.findOne(id);
  }

  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeJobDto: UpdateModeJobDto) {
    return this.modeJobService.update(id, updateModeJobDto);
  }

  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeJobService.remove(id);
  }
}
