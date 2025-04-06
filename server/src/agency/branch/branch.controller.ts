import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, Query, Res } from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto'
import { FilesInterceptor } from '@nestjs/platform-express'
import { FileService } from '@/libs/file/file.service';
import { Authorization, CurrentUser } from '@/auth/decorators';
import { UserRole } from '@prisma/client'
import { ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('branch')
export class BranchController {
  constructor(
    private readonly branchService: BranchService,
    private readonly file: FileService
  ) { }

  @Post()
  @ApiExcludeEndpoint()
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  create(
    @CurrentUser('id') userId: string,
    @Body() createBranchDto: CreateBranchDto
  ) {
    return this.branchService.create(userId, createBranchDto);
  }

  @Post('create-package-branch')
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  async createPackageBranch(
    @CurrentUser('id') userId: string,
    @Body() createBranchDto: CreateBranchDto[]
  ) {
    return this.branchService.createPackage(userId, createBranchDto)
  }

  @ApiExcludeEndpoint()
  @Authorization(UserRole.AGENCY)
  @UseInterceptors(FilesInterceptor('files'))
  @Post('logo')
  async uploadFile(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024, message: "Il file deve essere di massimo 5 MB" })]
      })
    ) files: Express.Multer.File[],
    @CurrentUser('id') id: string,
    @Query('folder') folder: string
  ) {
    const newFiles = await this.file.filterFiles(files)
    const fileData = await this.file.saveFiles(newFiles, folder + id)
    return fileData[0]
    //return this.branchService.updLogo(id, fileData)
  }

  @ApiExcludeEndpoint()
  @Get()
  @Authorization(UserRole.AGENCY)
  async findAll(@CurrentUser('id') userId: string) {
    return await this.branchService.findAll(userId)
  }

  @Get(':id')
  @Authorization(UserRole.AGENCY)
  async getBranchById(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return await this.branchService.getById(id, userId);
  }

  @Patch(':id')
  @Authorization(UserRole.AGENCY)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateBranchDto: UpdateBranchDto
  ) {
    return this.branchService.update(id, userId, updateBranchDto);
  }

  @Delete(':id')
  @Authorization(UserRole.AGENCY)
  remove(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.branchService.remove(id, userId);
  }

  @Post('delete-many')
  @Authorization(UserRole.AGENCY)
  deleteMany(
    @CurrentUser('id') userId: string,
    @Body() ids: string[]) {
    return this.branchService.deleteMany(ids, userId);
  }
}
