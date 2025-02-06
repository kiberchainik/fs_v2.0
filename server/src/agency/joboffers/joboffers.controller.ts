import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common'
import { JoboffersService } from './joboffers.service'
import { CreateJobofferDto, UpdateJobofferDto, JobOffersDto, FilterJobsDto, OpenAPIJobsResponse } from './dto'
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UserRole } from '@prisma/client'
import { ApiBearerAuth, ApiExcludeEndpoint, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger'

@ApiBearerAuth('JWT-auth')
@Controller('joboffers')
export class JoboffersController {
  constructor(private readonly joboffersService: JoboffersService) { }

  @ApiExcludeEndpoint()
  @Post()
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  create(
    @CurrentUser('id') userId: string,
    @Body() createJobofferDto: CreateJobofferDto
  ) {
    return this.joboffersService.create(userId, createJobofferDto);
  }

  @ApiOperation({ summary: 'Creazione nuova offerta di lavoro' })
  @ApiResponse({ status: 200, description: 'Creazione nuova offerta di lavoro', type: OpenAPIJobsResponse })
  @ApiBody({ type: OpenAPIJobsResponse })
  @Post('create-package-jobs')
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  createJobPackage(
    @CurrentUser('id') userId: string,
    @Body() createJobofferDto: CreateJobofferDto[]
  ) {
    return this.joboffersService.createPackage(userId, createJobofferDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  findAll(
    @Query() jobOffersDto: JobOffersDto
  ) {
    return this.joboffersService.findAll(jobOffersDto);
  }

  @ApiExcludeEndpoint()
  @Get('carousel/:limit')
  getJobsForMainCarousel(
    @Param('limit') limit: string
  ) {
    return this.joboffersService.getJobsForMainCarousel(limit)
  }

  @ApiExcludeEndpoint()
  @Get('searchTerm')
  findAllBySearchTerm(
    @Query('query') searchTerm: string
  ) {
    return this.joboffersService.findAllSearch(searchTerm);
  }

  @ApiExcludeEndpoint()
  @Post('filtering')
  findAllByFilter(
    @Body() filterParams: FilterJobsDto
  ) {
    return this.joboffersService.findAllByFilter(filterParams);
  }

  @ApiExcludeEndpoint()
  @Get('by-slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.joboffersService.findOneBySlug(slug);
  }

  @ApiExcludeEndpoint()
  @Get('metadata-by-slug/:slug')
  getMetadataBySlug(@Param('slug') slug: string) {
    return this.joboffersService.findMetedataJobBySlug(slug);
  }

  @Get('my-vacancies')
  @Authorization(UserRole.AGENCY)
  findAllOfUser(@CurrentUser('id') id: string,) {
    return this.joboffersService.findAllOfUser(id);
  }


  @Get('by-id/:id')
  @Authorization(UserRole.AGENCY)
  findOneById(@Param('id') id: string) {
    return this.joboffersService.findOneById(id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @Authorization(UserRole.AGENCY)
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() updateJobofferDto: UpdateJobofferDto
  ) {
    return this.joboffersService.update(id, userId, updateJobofferDto);
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  @Authorization(UserRole.AGENCY)
  remove(
    @Param('id') id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.joboffersService.remove(id, userId);
  }

  @Post('delete-many')
  @Authorization(UserRole.AGENCY)
  async deleteManyVacancies(
    @Body() ids: string[],
    @CurrentUser('id') id: string
  ) {
    return await this.joboffersService.deleteMany(id, ids);
  }

  @ApiExcludeEndpoint()
  @Get('confirm-vacancy/:id')
  @Authorization(UserRole.ADMIN)
  confirmVacancy(@Param('id') id: string) {
    return this.joboffersService.confirmVacancy(id)
  }
}
