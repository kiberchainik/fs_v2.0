import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, Query } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { CreateAgencyDto, UpdateAgencyDto } from './dto'
import { UserRole } from '@prisma/client';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { FileService } from '@/libs/file/file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PaginationQueryDto } from '@/libs/common/utils';
import { ApiBody, ApiConsumes, ApiExcludeController, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('agency')
export class AgencyController {
  constructor(
    private readonly agencyService: AgencyService,
    private readonly file: FileService
  ) { }

  @Post('settings')
  @Authorization(UserRole.AGENCY)
  @HttpCode(HttpStatus.OK)
  create(@CurrentUser('id') id: string, @Body() createAgencyDto: CreateAgencyDto) {
    return this.agencyService.create(id, createAgencyDto);
  }

  @Authorization(UserRole.AGENCY)
  @Get('profile')
  getAgencyData(@CurrentUser('id') id: string) {
    return this.agencyService.agencyData(id);
  }

  @Authorization(UserRole.AGENCY)
  @UseInterceptors(FilesInterceptor('files'))
  @Post('logo')
  async uploadFile(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 2 * 1024 * 1024, message: "Файл должен быть не более 2mb" })]
      })
    ) files: Express.Multer.File[],
    @CurrentUser('id') id: string,
    @Query('folder') folder?: string
  ) {
    const newFiles = await this.file.filterFiles(files)
    const fileData = await this.file.saveFiles(newFiles, id)

    //this.agencyService.updLogo(id, fileData)

    return fileData
  }

  @Get()
  async findAll(
    @Query() searchTerm: PaginationQueryDto
  ) {
    return await this.agencyService.findAll(searchTerm)
  }

  @Get(':slug')
  async findOne(
    @Param('slug') slug: string,
    @Query() pagination: PaginationQueryDto
  ) {
    return await this.agencyService.agencyDataBySlug(slug, pagination)
  }

  @Get('metadata-by-slug/:slug')
  @HttpCode(HttpStatus.OK)
  async getMetadataBySlug(
    @Param('slug') slug: string
  ) {
    return await this.agencyService.findMetadataBySlug(slug);
  }

  @Get('carousel/:limit')
  @HttpCode(HttpStatus.OK)
  async getAgenciesForCarousel(
    @Param('limit') limit: number
  ) {
    return await this.agencyService.getAgenciesForCarousel(limit);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(id, updateAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agencyService.remove(id);
  }
}
