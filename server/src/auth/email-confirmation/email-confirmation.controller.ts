import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { Response } from 'express';
import { ConfirmationDto } from './dto/confirmation.dto';
import { AuthService } from '../auth.service';

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
    private readonly auth: AuthService
  ) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  async newVerification(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: ConfirmationDto
  ) {
    const { refreshToken, ...response } = await this.emailConfirmationService.newVerificaion(dto)
    this.auth.addRefreshTokenToResponse(res, refreshToken)

    return response
  }
}