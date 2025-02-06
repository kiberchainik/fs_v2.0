import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, MaxFileSizeValidator, ParseFilePipe, Query, UploadedFiles } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { UpdateCandidatDto, OpenAPICandidatsResponse } from './dto'
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from '@/libs/file/file.service';
import { ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Candidats')
@Controller('candidat')
export class CandidatController {
  constructor(
    private readonly candidatService: CandidatService,
    private readonly file: FileService
  ) { }

  @ApiExcludeEndpoint()
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

  @ApiOperation({ summary: 'Elenco dei candadati' })
  @ApiResponse({ status: 200, description: 'Elenco dei tutti candidati registrati sul portale', type: OpenAPICandidatsResponse })
  @Get()
  findAll() {
    return this.candidatService.findAll();
  }

  @ApiExcludeEndpoint()
  @Get('carousel/:limit')
  getCarouselCandidats(
    @Param('limit') limit: number
  ) {
    return this.candidatService.getCarouselCandidats(limit);
  }

  @ApiExcludeEndpoint()
  @Get('privacy')
  @Authorization(UserRole.CANDIDATE)
  getCandidatPrivacy(@CurrentUser('id') id: string) {
    return this.candidatService.getCandidatPrivacy(id);
  }

  @ApiExcludeEndpoint()
  @Patch('privacy')
  @Authorization(UserRole.CANDIDATE)
  update(
    @Body() updateCandidatDto: UpdateCandidatDto,
    @CurrentUser('id') id: string
  ) {
    return this.candidatService.update(id, updateCandidatDto);
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatService.remove(id);
  }
}
