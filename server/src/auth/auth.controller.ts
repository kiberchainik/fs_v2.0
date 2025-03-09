import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { LoginDto, RegisterDto, OpenAPIAgencyResponse } from './dto'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { ConfigService } from '@nestjs/config'
import { REFRESH_TOKEN_NAME } from '@/libs/common/constants'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiBody, ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Agenzia di lavoro')
@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly config: ConfigService
	) { }

	@ApiExcludeEndpoint()
	@Post('register')
	@Recaptcha({ action: 'register', score: 0.5 })
	@HttpCode(HttpStatus.OK)
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}

	@ApiOperation({ summary: 'Autorizzazione dell\'agenzia' })
	@ApiBody({ type: LoginDto })
	@ApiResponse({ status: 200, description: 'Autorizzazione avvenuta con successo', type: OpenAPIAgencyResponse })
	@Post('login-agency')
	//@Recaptcha()
	@HttpCode(HttpStatus.OK)
	async loginWithAPI(
		@Body() dto: LoginDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.loginWithAPI(dto)
		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@ApiExcludeEndpoint()
	@Post('login')
	@Recaptcha({ action: 'login', score: 0.5 })
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

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth(@Req() req: Request) { }

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@Get('facebook')
	@UseGuards(AuthGuard('facebook'))
	async facebookAuth(@Req() req) { }

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@Get('instagram')
	@UseGuards(AuthGuard('instagram'))
	async instagramLogin(@Req() req: Request) { }

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@Get('linkedin')
	@UseGuards(AuthGuard('linkedin'))
	async linkedinLogin(@Req() req: Request) { }

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@Get('telegram')
	@UseGuards(AuthGuard('telegram'))
	async telegramLogin(@Req() req: Request) { }

	@ApiExcludeEndpoint()
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

	@ApiExcludeEndpoint()
	@HttpCode(200)
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}
}
