import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { TokenType, User } from 'prisma/__generated__';
import { v4 as uuidv4 } from 'uuid'
import { ConfirmationDto } from './dto/confirmation.dto';
import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';
import { AuthService } from '../auth.service';

@Injectable()
export class EmailConfirmationService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mail: MailService,
        private readonly user: UserService,
        @Inject(forwardRef(() => AuthService))
        private readonly auth:AuthService
    ) {}

    async newVerificaion(req: Request, dto: ConfirmationDto) {
        const existToken = await this.prisma.tokens.findUnique({
            where: {
                token: dto.toket,
                type: TokenType.VERIFICATION
            }
        })

        if(!existToken) {
            throw new NotFoundException('Token verified not found')
        }

        const hasExpired = new Date(existToken.expiresIn) < new Date()

        if(hasExpired) {
            throw new BadRequestException('Token invalid naher!')
        }

        const existingUser = await this.user.findByEmail(existToken.email)
        if(!existingUser) throw new NotFoundException('User not found')

        await this.prisma.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                isVerified: true
            }
        })

        await this.prisma.tokens.delete({
            where: {
                id: existToken.id,
                type: TokenType.VERIFICATION
            }
        })

        return this.auth.saveSassion(req, existingUser)
    }

    async sendVerificationToken(user: User) {
        const verificationToken = await this.generateVerificationToken(user.email)

        await this.mail.sendConfirmationEmail(verificationToken.email, verificationToken.token)

        return true
    }

    private async generateVerificationToken(email:string) {
        const token = uuidv4()
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000)

        const existToken = await this.existingToken(email)

        if(existToken) {
            await this.prisma.tokens.delete({
                where: {
                    id: existToken.id,
                    type: TokenType.VERIFICATION
                }
            })
        }

        const verificationToken = await this.prisma.tokens.create({
            data:{
                email,
                token,
                expiresIn,
                type: TokenType.VERIFICATION
            }
        })

        return verificationToken
    }

    private async existingToken(email:string) {
        return await this.prisma.tokens.findFirst({
            where: {
                email,
                type: TokenType.VERIFICATION
            }
        })
    }
}