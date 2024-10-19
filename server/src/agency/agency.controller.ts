import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, Query } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { CreateAgencyDto, UpdateAgencyDto } from './dto'
import { UserRole } from 'prisma/__generated__';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { FileService } from '@/libs/file/file.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('agency')
export class AgencyController {
  constructor(
    private readonly agencyService: AgencyService,
    private readonly file: FileService
  ) {}

  @Post('settings')
  @Authorization(UserRole.AGENCY)
  @HttpCode(HttpStatus.OK)
  create(@CurrentUser('id') id:string, @Body() createAgencyDto: CreateAgencyDto) {
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
  async uploadFile (
    @UploadedFiles (
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({maxSize: 2 * 1024 * 1024, message: "Файл должен быть не более 2mb"})]
      })
    ) files: Express.Multer.File[],
    @CurrentUser('id') id:string,
		@Query('folder') folder?: string
  ) {
    const newFiles = await this.file.filterFiles(files)
    const fileData = await this.file.saveFiles(newFiles, id)

    //this.agencyService.updLogo(id, fileData)
    
    return fileData
  }

  @Get()
  findAll() {
    return this.agencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(+id, updateAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agencyService.remove(+id);
  }
}
