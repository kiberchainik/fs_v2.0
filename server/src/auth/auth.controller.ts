import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto, RegisterDto } from './dto';
import { Recaptcha } from '@nestlab/google-recaptcha';
import { AuthProviderGuard } from './guards';
import { ProviderService } from './provider/provider.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly provider: ProviderService,
    private readonly config: ConfigService
  ) {}
  
  @Post('register')
  @Recaptcha()
  @HttpCode(HttpStatus.OK)
  async register (@Body() dto:RegisterDto) {
    return this.authService.register(dto)
  }

  @Post('login')
  @Recaptcha()
  @HttpCode(HttpStatus.OK)
  async login (
    @Body() dto:LoginDto,
    @Req() req:Request
  ) {
    return this.authService.login(req, dto)
  }

  @Get('/oauth/callback/:provider')
  @UseGuards(AuthProviderGuard)
  async callback (
    @Req() req:Request,
    @Res({passthrough: true}) res: Response,
    @Query('code') code: string,
    @Param('provider') provider: string
  ) {
    if(!code) {
      throw new BadRequestException('code of authorization is wrong')
    }

    await this.authService.extractProfileFromCode(req, provider, code)
    
    return res.redirect(`${this.config.getOrThrow<string>('ALLOWED_ORIGIN')}/dashboard/settings`)
  }

  @UseGuards(AuthProviderGuard)
  @Get('/oauth/connect/:provider')
  async connect (@Param('provider') provider: string) {
    const providerInstatce = this.provider.findByService(provider)

    return {
      url: providerInstatce.getAuthUrl()
    }
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout (
    @Res({passthrough: true}) res:Response,
    @Req() req:Request
  ) {
    return this.authService.logout(req, res)
  }

}
