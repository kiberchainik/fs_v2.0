import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractTypeService } from './contract-type.service';
import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@Controller('contract-type')
export class ContractTypeController {
  constructor(private readonly contractTypeService: ContractTypeService) { }

  @Authorization(UserRole.ADMIN)
  @Post()
  create(@Body() createContractTypeDto: CreateContractTypeDto) {
    return this.contractTypeService.create(createContractTypeDto);
  }

  @Get()
  findAll() {
    return this.contractTypeService.findAll();
  }

  @Authorization(UserRole.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractTypeService.findOne(id);
  }

  @Authorization(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractTypeDto: UpdateContractTypeDto) {
    return this.contractTypeService.update(id, updateContractTypeDto);
  }

  @Authorization(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractTypeService.remove(id);
  }
}
