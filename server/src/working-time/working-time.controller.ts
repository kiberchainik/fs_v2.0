import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingTimeService } from './working-time.service';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('working-time')
export class WorkingTimeController {
  constructor(private readonly workingTimeService: WorkingTimeService) {}

  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createWorkingTimeDto: CreateWorkingTimeDto) {
    return this.workingTimeService.create(createWorkingTimeDto);
  }

  @Get()
  findAll() {
    return this.workingTimeService.findAll();
  }

  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingTimeService.findOne(id);
  }

  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingTimeDto: UpdateWorkingTimeDto) {
    return this.workingTimeService.update(id, updateWorkingTimeDto);
  }

  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingTimeService.remove(id);
  }
}
