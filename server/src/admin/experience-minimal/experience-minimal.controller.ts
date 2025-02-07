import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceMinimalService } from './experience-minimal.service';
import { CreateExperienceMinimalDto } from './dto/create-experience-minimal.dto';
import { UpdateExperienceMinimalDto } from './dto/update-experience-minimal.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('experience-minimal')
export class ExperienceMinimalController {
  constructor(private readonly experienceMinimalService: ExperienceMinimalService) { }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createExperienceMinimalDto: CreateExperienceMinimalDto) {
    return this.experienceMinimalService.create(createExperienceMinimalDto);
  }

  @ApiOperation({ summary: 'Minima esperienza' })
  @ApiResponse({
    status: 200, description: 'Minima esperienza richiesta dal candidato', schema: {
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
    return this.experienceMinimalService.findAll();
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceMinimalService.findOne(id);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienceMinimalDto: UpdateExperienceMinimalDto) {
    return this.experienceMinimalService.update(id, updateExperienceMinimalDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceMinimalService.remove(id);
  }
}
