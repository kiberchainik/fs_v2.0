import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Authorization, CurrentUser } from '@/auth/decorators'
import { UpdateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  async getProfile (@CurrentUser('id') id:string) {
    const {password, ...user} = await this.userService.findById(id)

    return user
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get('short-data')
  async getUserShortData (@CurrentUser('id') id:string) {
    const data = await this.userService.getUserShortData(id)
    return data
  }

  @HttpCode(HttpStatus.OK)
  @Get('profile/:id')
  async getProfileById (@Param('id') id:string) {
    const {password, ...user} = await this.userService.findById(id)

    return user
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Patch('profile')
  async updateProfile (
    @CurrentUser('id') id:string,
    @Body() dto: UpdateUserDto
  ) {
    const {password, ...user} = await this.userService.update(id, dto)

    return user
  }
}