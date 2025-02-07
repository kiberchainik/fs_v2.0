import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractTypeService } from './contract-type.service';
import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('contract-type')
export class ContractTypeController {
  constructor(private readonly contractTypeService: ContractTypeService) { }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createContractTypeDto: CreateContractTypeDto) {
    return this.contractTypeService.create(createContractTypeDto);
  }

  @ApiOperation({ summary: 'Contratto di lavoro' })
  @ApiResponse({
    status: 200, description: 'I tipi di contratto di lsvoro', schema: {
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
    return this.contractTypeService.findAll();
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractTypeService.findOne(id);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractTypeDto: UpdateContractTypeDto) {
    return this.contractTypeService.update(id, updateContractTypeDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractTypeService.remove(id);
  }
}
