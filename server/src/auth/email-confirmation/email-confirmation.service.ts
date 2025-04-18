import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { ConfirmationDto } from './dto/confirmation.dto';
import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';
import { AuthService } from '@/auth/auth.service'
import { TokenType, User } from '@prisma/client';

@Injectable()
export class EmailConfirmationService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mail: MailService,
        private readonly user: UserService,
        @Inject(forwardRef(() => AuthService)) private readonly auth: AuthService
    ) { }

    async newVerificaion(dto: ConfirmationDto) {
        const existToken = await this.prisma.tokens.findUnique({
            where: {
                token: dto.token,
                type: TokenType.VERIFICATION
            }
        })

        if (!existToken) {
            throw new NotFoundException('Token verified non trovato')
        }

        const hasExpired = new Date(existToken.expiresIn) < new Date()
        if (hasExpired) {
            throw new BadRequestException('Il token di verifica email è scaduto, accedi per ricevere un nuovo link di verifica via email!')
        }

        const existingUser = await this.user.findByEmail(existToken.email)
        if (!existingUser) throw new NotFoundException('User not found')

        await this.prisma.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                isVerified: true
            }
        })

        if (existToken) {
            await this.prisma.tokens.delete({
                where: {
                    id: existToken.id,
                    type: TokenType.VERIFICATION
                }
            })
        }

        const tokens = this.auth.issueTokens(existingUser.id, existingUser.email, existingUser.login, existingUser.role)

        return { existingUser, ...tokens }
    }

    async sendVerificationToken(user: User) {
        const verificationToken = await this.generateVerificationToken(user.email)

        await this.mail.sendConfirmationEmail(verificationToken.email, verificationToken.token)

        return true
    }

    private async generateVerificationToken(email: string) {
        const token = uuidv4()
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000)

        const existToken = await this.existingToken(email)

        if (existToken) {
            await this.prisma.tokens.delete({
                where: {
                    id: existToken.id,
                    type: TokenType.VERIFICATION
                }
            })
        }

        const verificationToken = await this.prisma.tokens.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.VERIFICATION
            }
        })

        return verificationToken
    }

    private async existingToken(email: string) {
        return await this.prisma.tokens.findFirst({
            where: {
                email,
                type: TokenType.VERIFICATION
            }
        })
    }
}