import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, CreateAuthAccountDto, UpdateUserDto } from './dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                authAccounts: true
            }
        })

        if (!user) {
            throw new NotFoundException('User not found!')
        }

        return user
    }

    async getUserShortData(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                login: true,
                isVerified: true,
                role: true,
                candidatdata: {
                    select: {
                        firstname: true,
                        surname: true,
                        avatar: true
                    }
                },
                agencydata: {
                    select: {
                        agency_name: true,
                        logo: true
                    }
                }
            }
        })

        if (!user) {
            throw new NotFoundException('User not found!')
        }

        const data = {
            id: user.id,
            role: user.role,
            login: user.login,
            email: user.email,
            isVerified: user.isVerified,
            name: user.agencydata?.agency_name || user.candidatdata?.firstname,
            avatar: user.agencydata?.logo || user.candidatdata?.avatar
        }

        return data
    }

    async getCandidatPrivacy(id: string) {
        return await this.prisma.candidatData.findUnique({
          where: {
            userId: id
          }
        })
    }

    async findByEmail(email: string) {
        const login = email.split('@')[0]
        const user = await this.prisma.user.findFirst({
            where: { 
                OR: [
                    {email},
                    {login}
                ]
            },
            include: {
                authAccounts: true
            }
        })

        return user
    }

    async getProfileWithProvider(id: string, provide: string) {
        return await this.prisma.authAccount.findFirst({
            where: {
                id,
                provide
            }
        })
    }

    async create(dto: CreateUserDto) {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                login: dto.email.split('@')[0],
                password: dto.password ? await hash(dto.password) : '',
                method: dto.method,
                isVerified: dto.isVerified,
                role: dto.role
            },
            include: {
                authAccounts: true
            }
        })

        return user
    }

    async createAuthAccount(dto: CreateAuthAccountDto) {
        return await this.prisma.authAccount.create({
            data: { ...dto }
        })
    }

    async update(userId: string, dto: UpdateUserDto) {
        const user = await this.findById(userId)

        const updatedUser = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                ...dto
            }
        })

        return updatedUser
    }
}