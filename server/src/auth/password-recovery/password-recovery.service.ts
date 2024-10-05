import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TokenType } from 'prisma/__generated__';
import { v4 as uuidv4 } from 'uuid'
import { NewPasswordDto, ResetPasswordDto } from './dto';
import { hash } from 'argon2';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
    private readonly user: UserService,
  ) {}

  async reset(dto:ResetPasswordDto) {
    const existingUser = await this.user.findByEmail(dto.email)
    if(!existingUser) throw new NotFoundException('User not found')

    const passwordResetToken = await this.generatePasswordResetToken(existingUser.email)

    await this.mail.sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

    return true
  }

  async newPassword(dto:NewPasswordDto, token: string) {
    const existingToken = await this.prisma.tokens.findFirst({
      where: {
        token: token,
        type: TokenType.PASSWORD_RESET
      }
    })

    if(!existingToken) throw new NotFoundException('Token not found')

    const hasExpired = new Date(existingToken.expiresIn) < new Date()

    if(hasExpired) {
        throw new BadRequestException('Token invalid naher!')
    }

    const existingUser = await this.user.findByEmail(existingToken.email)
    if(!existingUser) throw new NotFoundException('User not found')

    await this.prisma.user.update({
      where: {
          id: existingUser.id
      },
      data: {
          password: await hash(dto.password)
      }
    })

    await this.prisma.tokens.delete({
      where: {
          id: existingToken.id,
          type: TokenType.PASSWORD_RESET
      }
    })

    return true
  }

  private async generatePasswordResetToken(email:string) {
    const token = uuidv4()
    const expiresIn = new Date(new Date().getTime() + 3600 * 1000)

    const existToken = await this.existingToken(email)

    if(existToken) {
        await this.prisma.tokens.delete({
            where: {
                id: existToken.id,
                type: TokenType.PASSWORD_RESET
            }
        })
    }

    const passwordResetToken = await this.prisma.tokens.create({
        data:{
            email,
            token,
            expiresIn,
            type: TokenType.PASSWORD_RESET
        }
    })

    return passwordResetToken
  }

  private async existingToken(email:string) {
    return await this.prisma.tokens.findFirst({
        where: {
            email,
            type: TokenType.PASSWORD_RESET
        }
    })
  }
}