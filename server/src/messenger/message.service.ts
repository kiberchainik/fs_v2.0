import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MessageService {
    constructor(private prisma: PrismaService) { }

    async createMessage(userId: string, text: string) {
        return this.prisma.message.create({
            data: { userId, text },
        });
    }

    async getChatHistory(limit: number = 50) {
        return this.prisma.message.findMany({
            orderBy: { createdAt: 'desc' },
            take: limit,
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        role: true,
                        agencydata: {
                            select: {
                                logo: true,
                                agency_name: true
                            }
                        },
                        candidatdata: {
                            select: {
                                avatar: true,
                                firstname: true,
                            }
                        }
                    }
                }
            },
        });
    }
}