import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common'
import { JoboffersService } from './joboffers.service'
import { CreateJobofferDto } from './dto/create-joboffer.dto'
import { UpdateJobofferDto } from './dto/update-joboffer.dto'
import { JobOffersDto } from './dto'
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UserRole } from 'prisma/__generated__'

@Controller('joboffers')
export class JoboffersController {
  constructor(private readonly joboffersService: JoboffersService) {}

  @Post()
  @Authorization(UserRole.AGENCY)
  @UsePipes(new ValidationPipe())
  create(
    @CurrentUser('id') userId:string,
    @Body() createJobofferDto: CreateJobofferDto
  ) {
    return this.joboffersService.create(userId, createJobofferDto);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Body() jobOffersDto: JobOffersDto) {
    return this.joboffersService.findAll(jobOffersDto);
  }

  @Get(':slug')
  findOneBySlug(@Param('slug') slug:string) {
    return this.joboffersService.findOneBySlug(slug);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @Authorization(UserRole.AGENCY)
  update(
    @CurrentUser('id') userId:string,
    @Param('id') id: string,
    @Body() updateJobofferDto: UpdateJobofferDto
  ) {
    return this.joboffersService.update(id, userId, updateJobofferDto);
  }

  @Delete(':id')
  @Authorization(UserRole.AGENCY)
  remove(
    @Param('id') id: string,
    @CurrentUser('id') userId:string
  ) {
    return this.joboffersService.remove(id, userId);
  }
}
