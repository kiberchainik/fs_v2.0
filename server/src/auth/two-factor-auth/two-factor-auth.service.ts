import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TokenType } from '@prisma/client';

@Injectable()
export class TwoFactorAuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly mail: MailService
    ) { }

    async validateTwoFactorToken(email: string, code: string) {
        const existToken = await this.prisma.tokens.findFirst({
            where: {
                email,
                type: TokenType.TWO_FACTOR
            }
        })

        if (!existToken) {
            throw new NotFoundException('Two factor code not found')
        }

        if (existToken.token !== code) throw new BadRequestException('Two factor code is wrong')

        const hasExpired = new Date(existToken.expiresIn) < new Date()

        if (hasExpired) {
            throw new BadRequestException('Two factor code invalid naher!')
        }

        await this.prisma.tokens.delete({
            where: {
                id: existToken.id,
                type: TokenType.TWO_FACTOR
            }
        })

        return true
    }

    async sendTwoFactorToken(email: string) {
        const twoFactorToken = await this.generateTwoFactorCode(email)

        await this.mail.sendTwoFactorCodeEmail(twoFactorToken.email, twoFactorToken.token)

        return true
    }

    private async generateTwoFactorCode(email: string) {
        const token = Math.floor(Math.random() * (1000000 - 100000) + 100000).toString()

        const expiresIn = new Date(new Date().getTime() + 300000)

        const existToken = await this.existingToken(email)

        if (existToken) {
            await this.prisma.tokens.delete({
                where: {
                    id: existToken.id,
                    type: TokenType.TWO_FACTOR
                }
            })
        }

        const twoFactorToken = await this.prisma.tokens.create({
            data: {
                email,
                token,
                expiresIn,
                type: TokenType.TWO_FACTOR
            }
        })

        return twoFactorToken
    }

    private async existingToken(email: string) {
        return await this.prisma.tokens.findFirst({
            where: {
                email,
                type: TokenType.TWO_FACTOR
            }
        })
    }
}