import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UpdateUserDto } from './dto';
import { ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

@ApiExcludeController()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  async getProfile(@CurrentUser('id') id: string) {
    const { password, ...user } = await this.userService.findById(id)

    return user
  }

  @ApiExcludeEndpoint()
  @Get('privacy')
  @Authorization(UserRole.CANDIDATE)
  getCandidatPrivacy(@CurrentUser('id') id: string) {
    return this.userService.getCandidatPrivacy(id);
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get('short-data')
  async getUserShortData(@CurrentUser('id') id: string) {
    return await this.userService.getUserShortData(id)
  }

  @HttpCode(HttpStatus.OK)
  @Get('profile/:id')
  async getProfileById(@Param('id') id: string) {
    const { password, ...user } = await this.userService.findById(id)
    return user
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Patch('profile')
  async updateProfile(
    @CurrentUser('id') id: string,
    @Body() dto: UpdateUserDto
  ) {
    const { password, ...user } = await this.userService.update(id, dto)
    return user
  }

  @ApiExcludeEndpoint()
  @HttpCode(HttpStatus.OK)
  @Get('settings')
  @Authorization(UserRole.CANDIDATE)
  async getSettings(@CurrentUser('id') id: string) {
    return await this.userService.getSettings(id)
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Delete('delete')
  async deleteProfile(@CurrentUser('id') id: string) {
    await this.userService.deleteProfile(id)
    return true
  }
}