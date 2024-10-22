import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, CreateSectorDto, UpdateCategoryDto, UpdateSectorDto } from './dto';
import { Authorization } from '@/auth/decorators';
import { UserRole } from 'prisma/__generated__';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Post('sector')
  @Authorization(UserRole.ADMIN)
  @UsePipes(new ValidationPipe())
  createSector (@Body() sectorDto:CreateSectorDto) {
    return this.categoryService.createSector(sectorDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get('sectors')
  findAllSectors() {
    return this.categoryService.findAllSectors()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Authorization(UserRole.ADMIN)
  @UsePipes(new ValidationPipe())
  @Patch('sector/:id')
  updateSector(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
    return this.categoryService.updateSector(id, updateSectorDto);
  }

  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoryService.remove(id)
  }

  @Authorization(UserRole.ADMIN)
  @UsePipes(new ValidationPipe())
  @Delete('sector/:id')
  removeSector(@Param('id') id: string) {
    return this.categoryService.removeSector(id);
  }
}
