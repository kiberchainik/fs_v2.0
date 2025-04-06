import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, MaxFileSizeValidator, ParseFilePipe, Query, UploadedFiles } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { UpdateCandidatDto, OpenAPICandidatsResponse, OpenAPICandidatFullDateResponse } from './dto'
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from '@/libs/file/file.service';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { PaginationQueryDto } from '@/libs/common/utils';

@ApiBearerAuth('JWT-auth')
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
  async caricaFile(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024, message: "Il file non deve essere più di 5MB" })]
      })
    ) files: Express.Multer.File[],
    @CurrentUser('id') id: string,
    @Query('folder') folder?: string
  ) {
    const nuoviFile = await this.file.filterFiles(files)
    const datiFile = await this.file.saveFiles(nuoviFile, id)

    //this.agencyService.updLogo(id, datiFile)

    return datiFile
  }

  @ApiOperation({ summary: 'Elenco dei candadati' })
  @ApiResponse({ status: 200, description: 'Elenco dei tutti candidati registrati sul portale', type: OpenAPICandidatsResponse })
  @Get()
  findAll(@Query() searchTerm: PaginationQueryDto) {
    return this.candidatService.findAll(searchTerm)
  }


  @ApiExcludeEndpoint()
  @Get(':login')
  getCandidatByEmail(@Param('login') login: string) {
    return this.candidatService.getCandidatByEmail(login)
  }

  @ApiExcludeEndpoint()
  @Get('/meta-data/:login')
  getCandidatMetaDate(@Param('login') login: string) {
    return this.candidatService.getCandidatMetaDate(login)
  }

  @ApiOperation({ summary: 'Candidato con i dati personali' })
  @ApiResponse({ status: 200, description: 'Tutti i dati del candidato', type: OpenAPICandidatFullDateResponse })
  @Authorization(UserRole.AGENCY)
  @Get('/for-agency/:login')
  getCandidatByEmailForAgency(@Param('login') login: string) {
    return this.candidatService.getCandidatByEmail(login)
  }

  @ApiExcludeEndpoint()
  @Get('carousel/:limit')
  getCarouselCandidats(
    @Param('limit') limit: number
  ) {
    return this.candidatService.getCarouselCandidats(limit);
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
