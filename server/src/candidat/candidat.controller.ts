import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { CreateCandidatDto } from './dto/create-candidat.dto';
import { UpdateCandidatDto } from './dto/update-candidat.dto';

@Controller('candidat')
export class CandidatController {
  constructor(private readonly candidatService: CandidatService) {}

  @Post()
  create(@Body() createCandidatDto: CreateCandidatDto) {
    return this.candidatService.create(createCandidatDto);
  }

  @Get()
  findAll() {
    return this.candidatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidatDto: UpdateCandidatDto) {
    return this.candidatService.update(+id, updateCandidatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatService.remove(+id);
  }
}
