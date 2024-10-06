import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { AuthMethod, User, UserRole } from 'prisma/__generated__';
import { Request, Response } from 'express';
import { LoginDto, RegisterDto } from './dto';
import { verify } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { ProviderService } from './provider/provider.service'
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';

@Injectable()
export class AuthService {
    constructor (
        private readonly user:UserService,
        private readonly config: ConfigService,
        private readonly provider: ProviderService,
        private readonly emailConfirm: EmailConfirmationService,
        private readonly twoFactorAuth:TwoFactorAuthService
    ) {}

    async register(dto: RegisterDto) {
        const isExists = await this.user.findByEmail(dto.email)

        if(isExists) throw new ConflictException('User allredy exist')
        
        const newUser = await this.user.create({
            email:dto.email, 
            password:dto.password,
            isVerified:false,
            method:AuthMethod.CREDENTIALS,
            role: dto.role
        })

        await this.emailConfirm.sendVerificationToken(newUser)

        return {
            message: 'Registration successfully. Please open you email for verified code!'
        }
    }

    async login(req: Request, dto: LoginDto) {
        const user = await this.user.findByEmail(dto.email)

        if(!user || !user.password) {
            throw new NotFoundException('User not found!')
        }

        const isValidPass = await verify(user.password, dto.password)

        if(!isValidPass) throw new UnauthorizedException('Login error!')

        if(!user.isVerified) {
            await this.emailConfirm.sendVerificationToken(user)
            throw new UnauthorizedException('Your email is not vrified. Please try against!')
        }

        if(user.isTwoFactorEnabled) {
            if(!dto.code) {
                await this.twoFactorAuth.sendTwoFactorToken(user.email)

                return {
                    message: 'Two factor code sended to email'
                }
            }

            await this.twoFactorAuth.validateTwoFactorToken(user.email, dto.code)
        }

        return this.saveSassion(req, user)
    }

    async extractProfileFromCode (
        req: Request,
        provider:string,
        code:string
    ) {
        const providerInstance = this.provider.findByService(provider)
        
        const profile = await providerInstance.findUserByCode(code)
        
        const account = await this.user.getProfileWithProvider(profile.id, profile.provider)
        
        let user = account?.userId
        ? await this.user.findById(account.userId)
        : null
        
        if(user) {
            return this.saveSassion(req, user)
        }

        user = await this.user.create({
            email: profile.email,
            password: '',
            method: AuthMethod[profile.provider.toUpperCase()],
            isVerified: true,
            role: UserRole.CANDIDAT
        })

        if(!account) {
            await this.user.createAuthAccount({
                userId: user.id,
                type: 'oauth',
                provide: profile.provider,
                accessToken: profile.access_token,
                refreshToken: profile.refresh_token,
                expiresAt: profile.expires_at
            })
        }

        return this.saveSassion(req, user)
    }
    
    async logout(req: Request, res: Response):Promise<void> {
        return new Promise((resolve, reject) => {
            req.session.destroy(err => {
                if(err) {
                    return reject(
                        new InternalServerErrorException('Server error!')
                    )
                }

                res.clearCookie(this.config.getOrThrow<string>('SESSION_NAME'))
                resolve()
            })
        })
    }
    
    public async saveSassion(req:Request, newUser:User) {
        return new Promise((resolve, reject) => {
            req.session.userId = newUser.id

            req.session.save(err => {
                if(err) {
                    return reject(
                        new InternalServerErrorException('Cant saved session. Control session params')
                    )
                }
                
                const {password, ...user} = newUser
                resolve({user})
            })
        })
    }
}