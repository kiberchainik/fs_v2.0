import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LevelEducationService } from './level-education.service';
import { CreateLevelEducationDto } from './dto/create-level-education.dto';
import { UpdateLevelEducationDto } from './dto/update-level-education.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('level-education')
export class LevelEducationController {
  constructor(private readonly levelEducationService: LevelEducationService) { }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createLevelEducationDto: CreateLevelEducationDto) {
    return this.levelEducationService.create(createLevelEducationDto);
  }

  @ApiOperation({ summary: 'Livello di educazione' })
  @ApiResponse({
    status: 200, description: 'Livello di educazione del candidato', schema: {
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
    return this.levelEducationService.findAll();
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.levelEducationService.findOne(id);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevelEducationDto: UpdateLevelEducationDto) {
    return this.levelEducationService.update(id, updateLevelEducationDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.levelEducationService.remove(id);
  }
}
