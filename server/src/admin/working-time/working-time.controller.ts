import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkingTimeService } from './working-time.service';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('working-time')
export class WorkingTimeController {
  constructor(private readonly workingTimeService: WorkingTimeService) { }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createWorkingTimeDto: CreateWorkingTimeDto) {
    return this.workingTimeService.create(createWorkingTimeDto);
  }

  @ApiOperation({ summary: 'Modalita di lavoro' })
  @ApiResponse({
    status: 200, description: 'Modalita di lavoro', schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' }
        }
      }
    }
  })
  @Get()
  findAll() {
    return this.workingTimeService.findAll();
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workingTimeService.findOne(id);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkingTimeDto: UpdateWorkingTimeDto) {
    return this.workingTimeService.update(id, updateWorkingTimeDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workingTimeService.remove(id);
  }
}
