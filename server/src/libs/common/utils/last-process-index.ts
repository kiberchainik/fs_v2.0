import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LastProcessIndexService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    public async getLastProcessedIndex(userId: string) {
        const progress = await this.prisma.lastProcessedIndex.findFirst({
            where: {
                AND: [
                    { userId },
                    { process_type: 'createJobPackage' }
                ]
            },
            select: { index: true }
        })
        return progress ? progress.index : null
    }

    public async updateLastProcessedIndex(userId: string, lastProcessedIndex: number) {
        await this.prisma.lastProcessedIndex.upsert({
            where: { userId },
            update: { index: lastProcessedIndex, process_type: 'createJobPackage' },
            create: { userId, process_type: 'createJobPackage', index: lastProcessedIndex }
        })
    }

    public async deleteProgress(userId: string) {
        await this.prisma.lastProcessedIndex.deleteMany({
            where: {
                AND: [
                    { userId },
                    { process_type: 'createJobPackage' }
                ]
            }
        })
    }
}