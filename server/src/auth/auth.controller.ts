import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { LoginDto, RegisterDto } from './dto'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { ConfigService } from '@nestjs/config'
import { REFRESH_TOKEN_NAME } from '@/libs/common/constants'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly config: ConfigService
	) { }

	@ApiOperation({ summary: 'User registration' })
	@ApiBody({ type: RegisterDto })
	@ApiResponse({ status: 200, description: 'After successful registration, be sure to open your email and follow the email confirmation link. After that, you refresh in your account!' })
	@Post('register')
	@Recaptcha()
	@HttpCode(HttpStatus.OK)
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}

	@ApiOperation({ summary: 'User log in' })
	@ApiBody({ type: LoginDto })
	@ApiResponse({ status: 200, description: 'After successful authorization you will be returned accessToken' })
	@ApiResponse({ status: 403, description: 'If you have not confirmed your email after registration, then you will receive an error and a new link will be sent to confirm your email. After confirming your email, you will be able to log in to your account' })
	@Post('login')
	@Recaptcha()
	@HttpCode(HttpStatus.OK)
	async login(
		@Body() dto: LoginDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, password, ...response } = await this.authService.login(dto)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
		//return this.authService.login(req, dto)
	}

	@ApiBearerAuth()
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
	async googleAuth(@Req() req: Request) { }

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	async googleAuthCallback(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${this.config.getOrThrow<string>('ALLOWED_ORIGIN') as string}/candidat/privacy?accessToken=${response.accessToken}`
		)
	}

	@Get('facebook')
	@UseGuards(AuthGuard('facebook'))
	async facebookAuth(@Req() req) { }

	@Get('facebook/redirect')
	@UseGuards(AuthGuard('facebook'))
	async facebookAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${this.config.getOrThrow<string>('ALLOWED_ORIGIN') as string}/candidat/privacy?accessToken=${response.accessToken}`
		)
	}

	@Get('instagram')
	@UseGuards(AuthGuard('instagram'))
	async instagramLogin(@Req() req: Request) { }

	@Get('instagram/callback')
	@UseGuards(AuthGuard('instagram'))
	async instagramLoginCallback(
		@Req() req: any,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${this.config.getOrThrow<string>('ALLOWED_ORIGIN') as string}/candidat/privacy?accessToken=${response.accessToken}`
		)
	}

	@Get('linkedin')
	@UseGuards(AuthGuard('linkedin'))
	async linkedinLogin(@Req() req: Request) { }

	@Get('linkedin/callback')
	@UseGuards(AuthGuard('linkedin'))
	async linkedinLoginCallback(
		@Req() req: any,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${this.config.getOrThrow<string>('ALLOWED_ORIGIN') as string}/candidat/privacy?accessToken=${response.accessToken}`
		)
	}

	@Get('telegram')
	@UseGuards(AuthGuard('telegram'))
	async telegramLogin(@Req() req: Request) { }

	@Get('telegram/callback')
	@UseGuards(AuthGuard('telegram'))
	async telegramCallback(
		@Req() req: any,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.validateOAuthLogin(req)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${this.config.getOrThrow<string>('ALLOWED_ORIGIN') as string}/candidat/privacy?accessToken=${response.accessToken}`
		)
	}

	@HttpCode(200)
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}
}
