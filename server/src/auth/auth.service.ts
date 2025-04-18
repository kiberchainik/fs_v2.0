import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { Response } from 'express';
import { LoginDto, RegisterDto } from './dto';
import { verify } from 'argon2';
import { ConfigService } from '@nestjs/config'
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service'
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service'
import { JwtService } from '@nestjs/jwt'
import { EXPIRE_DAY_REFRESH_TOKEN, REFRESH_TOKEN_NAME } from '@/libs/common/constants';
import { AuthMethod, UserRole } from '@prisma/client'

@Injectable()
export class AuthService {
    constructor(
        private jwt: JwtService,
        private readonly user: UserService,
        private readonly config: ConfigService,
        private readonly emailConfirm: EmailConfirmationService,
        private readonly twoFactorAuth: TwoFactorAuthService,

    ) { }

    async register(dto: RegisterDto) {
        const isExist = await this.user.findByEmail(dto.email) //if !user, returned throw
        if (isExist) {
            throw new BadRequestException('Un utente con questi dati esiste già!')
        }

        const login = dto.email.split('@')[0]
        const newUser = await this.user.create({
            email: dto.email,
            login,
            password: dto.password,
            isVerified: false,
            method: AuthMethod.CREDENTIALS,
            role: dto.role
        })

        //const tokens = this.issueTokens(user.id, user.email, user.role)
        await this.emailConfirm.sendVerificationToken(newUser)

        return {
            message: 'Registrazione avvenuta con successo. Per favore controlla la tua email per il codice di verifica!'
        }
    }

    async login(dto: LoginDto) {
        const user = await this.validateUser(dto.email) //if !user, returned throw

        if (user.method !== AuthMethod.CREDENTIALS)
            throw new UnauthorizedException('Ti sei registrato tramite social. Per accedere, utilizza il social e specifica la password per l\'accesso nelle impostazioni dell\'account!')

        const isValidPass = await verify(user.password, dto.password)

        if (!isValidPass) throw new UnauthorizedException('Email o password errati!')

        if (!user.isVerified) {
            await this.emailConfirm.sendVerificationToken(user)
            throw new UnauthorizedException('La tua email non è verificata. Per favore riprova!')
        }

        // if(user.isTwoFactorEnabled) {
        //     if(!dto.code) {
        //         await this.twoFactorAuth.sendTwoFactorToken(user.email)

        //         return {
        //             message: 'Two factor code sended to email'
        //         }
        //     }

        //     await this.twoFactorAuth.validateTwoFactorToken(user.email, dto.code)
        // }

        const tokens = this.issueTokens(user.id, user.email, user.login, user.role)
        return { ...user, ...tokens }
    }

    async loginWithAPI(dto: LoginDto) {
        const { authAccounts, isTwoFactorEnabled, isVerified, method, password, updatedAt, role, ...user } = await this.validateUser(dto.email) //if !user, returned throw

        const isValidPass = await verify(password, dto.password)

        if (!isValidPass) throw new UnauthorizedException('Email o password errati!')

        if (role !== UserRole.AGENCY) throw new UnauthorizedException('Tu non sei agenzia!')

        const tokens = this.issueTokens(user.id, user.email, user.login, role)
        return { ...user, ...tokens }
    }

    issueTokens(userId: string, email: string, login: string, role: UserRole) {
        const data = {
            id: userId,
            email,
            login,
            role
        }

        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h'
        })

        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        })

        return { accessToken, refreshToken }
    }

    private async validateUser(email: string) {
        const user = await this.user.findByEmail(email)

        if (!user) throw new NotFoundException('Controlla le tue credenziali di accesso!')

        return user
    }

    async validateOAuthLogin(req: any) {
        let user = await this.user.findByEmail(req.user.email)

        if (!user) {
            user = await this.user.create({
                email: req.user.email,
                login: req.user.email.split('@')[0],
                isVerified: true,
                method: AuthMethod.GOOGLE,
                password: '',
                role: UserRole.CANDIDATE
            })
        }

        const tokens = this.issueTokens(user.id, user.email, user.login, user.role)

        return { user, ...tokens }
    }

    async getNewTokens(refreshToken: string) {
        const result = await this.jwt.verifyAsync(refreshToken)
        if (!result) throw new UnauthorizedException('Refresh token non valido!')

        const user = await this.user.findById(result.id)

        const tokens = this.issueTokens(user.id, user.email, user.login, user.role)

        return { user, ...tokens }
    }

    addRefreshTokenToResponse(res: Response, refreshToken: string) {
        const expiresIn = new Date()
        expiresIn.setDate(expiresIn.getDate() + EXPIRE_DAY_REFRESH_TOKEN)

        res.cookie(REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            domain: this.config.get('SERVER_DOMAIN'),
            expires: expiresIn,
            secure: true,
            sameSite: 'none' // for prodaction 'lax'
        })
    }

    removeRefreshTokenFromResponse(res: Response) {
        res.cookie(REFRESH_TOKEN_NAME, '', {
            httpOnly: true,
            domain: this.config.get('SERVER_DOMAIN'),
            expires: new Date(0),
            secure: true,
            sameSite: 'none'
        })
    }
}