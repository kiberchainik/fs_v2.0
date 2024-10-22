import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { LoginDto, RegisterDto } from './dto'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { ConfigService } from '@nestjs/config'
import { REFRESH_TOKEN_NAME } from '@/libs/common/constants'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
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
    @Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, password, ...response } = await this.authService.login(dto)
    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
    //return this.authService.login(req, dto)
  }

  @HttpCode(200)
	@Post('access-token')
	async getNewTokens(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		const refreshTokenFromCookies = req.cookies[REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.authService.removeRefreshTokenFromResponse(res)
			throw new UnauthorizedException('Refresh токен не прошел')
		}

		const { refreshToken, ...response } = await this.authService.getNewTokens(refreshTokenFromCookies)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

  @Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth(@Req() req) {}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	async googleAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${process.env['ALLOWED_ORIGIN']}/dashboard?accessToken=${response.accessToken}`
		)
	}

  	@HttpCode(200)
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}

}
