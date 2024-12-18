import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSavedJobDto } from './dto/create-saved-job.dto'
import { PrismaService } from '@/prisma/prisma.service';
import { returnCategoryBaseObject } from '@/admin/category/dto';
import { returnAgencyBaseObject } from '@/agency/dto';
import { returnTagsObject } from '@/agency/joboffers/dto';

@Injectable()
export class SavedJobsService {
  constructor(private readonly prisma: PrismaService) { }

  async saveJob(userId: string, jobId: CreateSavedJobDto) {
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

    const existingSavedJob = await this.prisma.savedJobs.findFirst({
      where: {
        candidateId: candidateData.id,
        jobOfferId: jobId.jobId,
      },
    });

    if (existingSavedJob) {
      throw new ConflictException('Вакансия уже добавлена в избранное');
    }

    try {
      return await this.prisma.savedJobs.create({
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
        throw new ConflictException('Вакансия уже добавлена в избранное');
      }
      throw error;
    }
  }

  async removeFromSaved(userId: string, jobId: string) {
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

    try {
      return await this.prisma.savedJobs.delete({
        where: {
          candidateId_jobOfferId: {
            candidateId: candidateData.id,
            jobOfferId: jobId,
          }
        }
      })
    } catch (error) {
      throw new ConflictException('Вакансия уже была удалена')
    }

  }

  async getSavedJobs(userId: string) {
    const candidateData = await this.prisma.candidatData.findFirst({
      where: { userId }
    });

    if (!candidateData) {
      throw new NotFoundException('Данные кандидата не найдены');
    }

    const savedJobs = await this.prisma.savedJobs.findMany({
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
