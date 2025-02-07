import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModeJobService } from './mode-job.service';
import { CreateModeJobDto } from './dto/create-mode-job.dto';
import { UpdateModeJobDto } from './dto/update-mode-job.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('mode-job')
export class ModeJobController {
  constructor(private readonly modeJobService: ModeJobService) { }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createModeJobDto: CreateModeJobDto) {
    return this.modeJobService.create(createModeJobDto);
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
    return this.modeJobService.findAll();
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeJobService.findOne(id);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeJobDto: UpdateModeJobDto) {
    return this.modeJobService.update(id, updateModeJobDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeJobService.remove(id);
  }
}
