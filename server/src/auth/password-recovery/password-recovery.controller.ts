import { Controller, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { Recaptcha } from '@nestlab/google-recaptcha';
import { NewPasswordDto, ResetPasswordDto } from './dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('auth/password-recovery')
export class PasswordRecoveryController {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) { }

  @Recaptcha({ action: 'reset', score: 0.5 })
  @Post('reset')
  @HttpCode(HttpStatus.OK)
  async reset(
    @Body() dto: ResetPasswordDto
  ) {
    return this.passwordRecoveryService.reset(dto);
  }

  @Recaptcha({ action: 'new', score: 0.5 })
  @Post('new/:token')
  @HttpCode(HttpStatus.OK)
  async newPassword(
    @Body() dto: NewPasswordDto,
    @Param('token') token: string
  ) {
    return this.passwordRecoveryService.newPassword(dto, token);
  }
}
