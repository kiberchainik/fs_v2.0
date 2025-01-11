import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, Query } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { CreateAgencyDto, UpdateAgencyDto } from './dto'
import { UserRole } from '@prisma/client';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { FileService } from '@/libs/file/file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PaginationQueryDto } from '@/utils';
import { ApiBody, ApiConsumes, ApiExcludeEndpoint, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('agency')
export class AgencyController {
  constructor(
    private readonly agencyService: AgencyService,
    private readonly file: FileService
  ) { }

  @ApiOperation({ summary: 'Compilazione delle informazioni dell\'agenzia prima di aggiungere annunci' })
  @ApiResponse({ status: 200, description: 'Le informazioni dell\'agenzia sono state aggiunte con successo' })
  @ApiBody({ type: CreateAgencyDto })
  @Post('settings')
  @Authorization(UserRole.AGENCY)
  @HttpCode(HttpStatus.OK)
  create(@CurrentUser('id') id: string, @Body() createAgencyDto: CreateAgencyDto) {
    return this.agencyService.create(id, createAgencyDto);
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.AGENCY)
  @Get('profile')
  getAgencyData(@CurrentUser('id') id: string) {
    return this.agencyService.agencyData(id);
  }

  @Authorization(UserRole.AGENCY)
  @UseInterceptors(FilesInterceptor('files'))
  @ApiExcludeEndpoint()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        outletId: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
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

  @ApiExcludeEndpoint()
  @Get()
  findAll(
    @Query() searchTerm: PaginationQueryDto
  ) {
    return this.agencyService.findAll(searchTerm)
  }

  @ApiExcludeEndpoint()
  @Get(':slug')
  async findOne(
    @Param('slug') slug: string,
    @Query() pagination: PaginationQueryDto
  ) {
    return await this.agencyService.agencyDataBySlug(slug, pagination)
  }

  @ApiExcludeEndpoint()
  @Get('metadata-by-slug/:slug')
  @HttpCode(HttpStatus.OK)
  async getMetadataBySlug(
    @Param('slug') slug: string
  ) {
    return await this.agencyService.findMetadataBySlug(slug);
  }

  @ApiExcludeEndpoint()
  @Get('carousel/:limit')
  @HttpCode(HttpStatus.OK)
  async getAgenciesForCarousel(
    @Param('limit') limit: number
  ) {
    return await this.agencyService.getAgenciesForCarousel(limit);
  }

  @ApiOperation({ summary: 'Aggiornamento delle informazioni dell\'agenzia' })
  @ApiResponse({ status: 200, description: 'Le informazioni dell\'agenzia sono state aggiornate con successo' })
  @ApiBody({ type: CreateAgencyDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(id, updateAgencyDto);
  }

  @ApiOperation({ summary: 'Cancellazione account dell\'agenzia' })
  @ApiResponse({ status: 200, description: 'Le informazioni dell\'agenzia sono state aggiornate con successo' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agencyService.remove(id);
  }
}
