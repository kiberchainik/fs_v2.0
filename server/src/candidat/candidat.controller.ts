import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, MaxFileSizeValidator, ParseFilePipe, Query, UploadedFiles } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { CreateCandidatDto } from './dto/create-candidat.dto';
import { UpdateCandidatDto } from './dto/update-candidat.dto';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from '@/libs/file/file.service';

@Controller('candidat')
export class CandidatController {
  constructor(
    private readonly candidatService: CandidatService,
    private readonly file: FileService
  ) { }

  @Post()
  create(@Body() createCandidatDto: CreateCandidatDto) {
    return this.candidatService.create(createCandidatDto);
  }

  @Authorization(UserRole.CANDIDATE)
  @UseInterceptors(FilesInterceptor('files'))
  @Post('avatar')
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
  findAll() {
    return this.candidatService.findAll();
  }

  @Get('carousel/:limit')
  getCarouselCandidats(
    @Param('limit') limit: number
  ) {
    return this.candidatService.getCarouselCandidats(limit);
  }

  @Get('privacy')
  @Authorization(UserRole.CANDIDATE)
  getCandidatPrivacy(@CurrentUser('id') id: string) {
    return this.candidatService.getCandidatPrivacy(id);
  }

  @Patch('privacy')
  @Authorization(UserRole.CANDIDATE)
  update(
    @Body() updateCandidatDto: UpdateCandidatDto,
    @CurrentUser('id') id: string
  ) {
    return this.candidatService.update(id, updateCandidatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatService.remove(id);
  }
}
