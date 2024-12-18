import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateSendCandidatureDto } from './dto/create-send-candidature.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { returnCategoryBaseObject } from '@/admin/category/dto';
import { returnAgencyBaseObject } from '@/agency/dto';
import { returnTagsObject } from '@/agency/joboffers/dto';

@Injectable()
export class SendCandidatureService {
  constructor(private readonly prisma: PrismaService) { }

  async sendCandidature(userId: string, jobId: CreateSendCandidatureDto) {
    const candidateData = await this.prisma.candidatData.findFirst({
      where: {
        user: {
          id: userId
        }
      },
      select: {
        id: true
      }
    });

    if (!candidateData) {
      throw new NotFoundException('Данные кандидата не найдены');
    }

    // Проверяем существование вакансии
    const jobOffer = await this.prisma.jobOffers.findUnique({
      where: { id: jobId.jobId }
    });

    if (!jobOffer) {
      throw new NotFoundException('Вакансия не найдена');
    }

    const existingSavedJob = await this.prisma.sendCandidature.findFirst({
      where: {
        candidateId: candidateData.id,
        jobOfferId: jobId.jobId,
      },
    });

    if (existingSavedJob) {
      throw new ConflictException('Вы уже отправили свою кандидатуру на данную вакансию! Ожидайте, с Вами обязетельно свзяжутся!');
    }

    try {
      return await this.prisma.sendCandidature.create({
        data: {
          candidateId: candidateData.id,
          jobOfferId: jobId.jobId,
        },
        select: {
          id: true,
          candidateId: true,
          jobOfferId: true
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Вы уже отправили свою кандидатуру на данную вакансию! Ожидайте, с Вами обязетельно свзяжутся!');
      }
      throw error;
    }
  }

  async removeCandidateFromJob(userId: string, jobId: string) {
    const candidateData = await this.prisma.candidatData.findFirst({
      where: {
        user: {
          id: userId
        }
      }
    });

    if (!candidateData) {
      throw new NotFoundException('Данные кандидата не найдены');
    }

    return await this.prisma.sendCandidature.delete({
      where: {
        candidateId_jobOfferId: {
          candidateId: candidateData.id,
          jobOfferId: jobId,
        }
      }
    });
  }

  async getCandidatureJobs(userId: string) {
    const candidateData = await this.prisma.candidatData.findFirst({
      where: { userId }
    });

    if (!candidateData) {
      throw new NotFoundException('Данные кандидата не найдены');
    }

    const savedJobs = await this.prisma.sendCandidature.findMany({
      where: {
        candidate: {
          userId: userId
        }
      },
      include: {
        jobOffer: {
          include: {
            categories: {
              select: returnCategoryBaseObject
            },
            agency: {
              select: returnAgencyBaseObject
            },
            sectors: true,
            branch: true,
            tags: {
              select: returnTagsObject
            },
            savedBy: {
              select: {
                candidate: {
                  select: {
                    userId: true
                  }
                }
              }
            },
            contractType: {
              select: { name: true }
            },
            experienceMinimalJob: {
              select: { name: true }
            },
            levelEducation: {
              select: { name: true }
            },
            modeJob: {
              select: { name: true }
            },
            workingTimeJob: {
              select: { name: true }
            }
          }
        }
      }
    });

    return savedJobs
  }
}
