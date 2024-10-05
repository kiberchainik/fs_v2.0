import { Controller, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { Recaptcha } from '@nestlab/google-recaptcha';
import { NewPasswordDto, ResetPasswordDto } from './dto';

@Controller('auth/password-recovery')
export class PasswordRecoveryController {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}

  @Recaptcha()
  @Post('reset')
  @HttpCode(HttpStatus.OK)
  async reset (
    @Body() dto: ResetPasswordDto
  ) {
    return this.passwordRecoveryService.reset(dto);
  }

  @Recaptcha()
  @Post('new/:token')
  @HttpCode(HttpStatus.OK)
  async newPassword(
    @Body() dto: NewPasswordDto,
    @Param('token') token: string
  ) {
    return this.passwordRecoveryService.newPassword(dto, token);
  }
}
