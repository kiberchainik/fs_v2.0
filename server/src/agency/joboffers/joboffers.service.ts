import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobofferDto, UpdateJobofferDto, JobOffersDto, returnTagsObject } from './dto'
import { CategoryService } from 'src/admin/category/category.service';
import { Prisma } from '@prisma/client';
import { returnCategoryBaseObject } from 'src/admin/category/dto'
import { returnAgencyBaseObject } from 'src/agency/dto'
import { PrismaService } from '@/prisma/prisma.service';
import { LastProcessIndexService, slugify } from '@/libs/common/utils';
import { FilterJobsDto } from './dto/filterJobs.dto';

@Injectable()
export class JoboffersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService,
    private readonly lastProcessIndex: LastProcessIndexService
  ) { }

  private includesAll: Prisma.jobOffersInclude = {
    categories: {
      select: returnCategoryBaseObject
    },
    agency: {
      select: returnAgencyBaseObject
    },
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
    sendCandidature: {
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

  private CreateNewJob = async (idAgency: string, createJobofferDto: CreateJobofferDto) => {
    const {
      categoryId: categories,
      branchId,
      tags,
      sectors,
      slug,
      contractTypeId,
      experienceMinimalId,
      levelEducationId,
      modeJobId,
      workingTimeId,
      ...jobOffers
    } = createJobofferDto

    //const existsCategories = await this.categoryService.getById(categoryIds)
    //const categoriesIds = existsCategories.map((catId) =>({id: catId.id}))

    const jobTags = tags?.map((tag) => ({
      name: tag, slug: slugify(tag)
    })) || []

    const jobSectors = sectors?.map((id) => ({
      id
    })) || []

    const optionals = {
      contractType: contractTypeId ? ({ connect: { id: contractTypeId } }) : {},
      experienceMinimalJob: experienceMinimalId ? ({ connect: { id: experienceMinimalId } }) : {},
      levelEducation: levelEducationId ? ({ connect: { id: levelEducationId } }) : {},
      modeJob: modeJobId ? ({ connect: { id: modeJobId } }) : {},
      workingTimeJob: workingTimeId ? ({ connect: { id: workingTimeId } }) : {}
    }

    const newJob = await this.prisma.jobOffers.create({
      data: {
        ...jobOffers,
        slug: slugify(createJobofferDto.slug ? createJobofferDto.slug : createJobofferDto.title),
        categories: {
          connect: { id: categories }
        },
        sectors: {
          connect: jobSectors
        },
        tags: {
          create: jobTags
        },
        agency: {
          connect: { id: idAgency }
        },
        ...optionals
      },
      include: {
        ...this.includesAll,
        sectors: true,
        branch: true
      }
    })

    await this.prisma.jobOffers.update({
      where: { id: newJob.id },
      data: { slug: `${newJob.slug}_${newJob.id.split('-')[0]}` }
    })

    if (branchId) {
      await this.prisma.jobOffers.update({
        where: { id: newJob.id },
        data: { branchId }
      })
    }

    return newJob
  }

  async create(userId: string, createJobofferDto: CreateJobofferDto) {
    const { id } = await this.getAgencyDataId(userId)

    if (id) throw new NotFoundException('Per aggiungere filiali e annunci, completa il profilo!')

    this.CreateNewJob(id, createJobofferDto)
  }

  async createPackage(userId: string, createJobofferDto: CreateJobofferDto[]) {
    const batchSize: number = 500
    const delay: number = 1000
    const startIndex: number = 0 // Индекс начала добавления
    const { id } = await this.getAgencyDataId(userId)

    if (!id) throw new BadRequestException('Per aggiungere filiali e annunci, completa il profilo!')

    let lastProcessedIndex = await this.lastProcessIndex.getLastProcessedIndex(userId) || startIndex

    try {
      for (let i = startIndex; i < createJobofferDto.length; i += batchSize) {
        const batch = createJobofferDto.slice(i, i + batchSize)

        for (let j = 0; j < batch.length; j++) {
          const jobOffer = batch[j]
          await this.CreateNewJob(id, jobOffer)
          lastProcessedIndex = i + j + 1
        }

        await new Promise(resolve => setTimeout(resolve, delay))
      }

      await this.lastProcessIndex.deleteProgress(userId)
      return ('Gli annunci sono stati aggiunti con successo')
    } catch (error) {
      await this.lastProcessIndex.updateLastProcessedIndex(userId, lastProcessedIndex)
      await this.prisma.$disconnect()
      throw new BadRequestException(`Errore durante l'aggiunta degli utenti all'indice ${lastProcessedIndex}: ${error}`)
    }
  }

  async update(idJob: string, userId: string, updateJobofferDto: UpdateJobofferDto) {
    const { tags } = await this.prisma.jobOffers.findFirst({
      where: {
        AND: [
          { id: idJob },
          { agency: { userId } }
        ]
      },
      select: {
        tags: {
          select: {
            id: true
          }
        }
      }
    })

    const {
      categoryId: categories,
      branchId,
      tags: vTags,
      sectors,
      slug,
      contractTypeId,
      experienceMinimalId,
      levelEducationId,
      modeJobId,
      workingTimeId,
      ...jobOffers
    } = updateJobofferDto

    if (vTags) {
      await this.prisma.jobTags.deleteMany({
        where: {
          id: {
            in: tags.map(i => i.id)
          }
        }
      })
    }

    const jobTags = vTags?.map((tag) => ({
      name: tag, slug: slugify(tag)
    })) || []

    const jobSectors = sectors?.map((id) => ({
      id
    })) || []

    const optionals = {
      contractType: contractTypeId ? ({ connect: { id: contractTypeId } }) : {},
      experienceMinimalJob: experienceMinimalId ? ({ connect: { id: experienceMinimalId } }) : {},
      levelEducation: levelEducationId ? ({ connect: { id: levelEducationId } }) : {},
      modeJob: modeJobId ? ({ connect: { id: modeJobId } }) : {},
      workingTimeJob: workingTimeId ? ({ connect: { id: workingTimeId } }) : {}
    }

    const vacancy = await this.prisma.agencyData.update({
      where: {
        userId
      },
      data: {
        jobOffers: {
          update: {
            where: {
              id: idJob
            },
            data: {
              ...jobOffers,
              slug: `${slugify(updateJobofferDto.slug)}_${idJob.split('-')[0]}`,
              categories: {
                connect: { id: categories }
              },
              sectors: {
                connect: jobSectors
              },
              tags: {
                create: jobTags
              },
              ...optionals,
              branch: {
                connect: { id: branchId }
              },
              updatedAt: new Date()
            }
          }
        }
      },
      include: {
        jobOffers: {
          include: {
            ...this.includesAll,
            branch: true,
            sectors: true
          }
        }
      }
    })

    return vacancy
  }

  async findAll({ isValidate, agencyId, branchId, categoryId, tagId, byPopularity, limit, page }: JobOffersDto) {
    const where: Prisma.jobOffersWhereInput = { isValidate }
    const orderBy: Prisma.jobOffersOrderByWithRelationInput[] = []

    if (byPopularity) {
      orderBy.push({ views: 'desc' })
    }

    orderBy.push({ createdAt: 'desc' })
    agencyId ? (where['agency'] = { id: agencyId }) : {}
    branchId ? (where['branch'] = { id: branchId }) : {}
    categoryId ? (where['categories'] = { id: categoryId }) : {}
    tagId ? (where['tags'] = { some: { id: tagId } }) : {}

    const [vacancies, vacanciesCount] = await this.prisma.$transaction([
      this.prisma.jobOffers.findMany({
        where,
        orderBy,
        skip: page * limit - limit,
        take: limit,
        include: {
          ...this.includesAll,
          sectors: true,
          branch: true
        }
      }),
      this.prisma.jobOffers.count({ where })
    ])
    const pageCount = Math.ceil(vacanciesCount / limit)
    return {
      items: vacancies,
      count: vacanciesCount,
      pageCount
    }
  }

  async findAllByFilter({ contractTypeId, experienceMinimalId, levelEducationId, location, modeJobId, workingTimeId, isValidate, agencyId, branchId, categoryId, limit, page }: FilterJobsDto) {
    const where: Prisma.jobOffersWhereInput = { isValidate }
    const orderBy: Prisma.jobOffersOrderByWithRelationInput[] = []

    orderBy.push({ createdAt: 'desc' })
    categoryId ? (where['categories'] = { id: categoryId }) : {}
    location ? (where['location'] = location) : ''
    agencyId ? (where['agency'] = { id: agencyId }) : {}
    branchId ? (where['branch'] = { id: branchId }) : {}
    contractTypeId ? (where['contractType'] = { id: contractTypeId }) : {}
    experienceMinimalId ? (where['experienceMinimalJob'] = { id: experienceMinimalId }) : {}
    levelEducationId ? (where['levelEducation'] = { id: levelEducationId }) : {}
    modeJobId ? (where['modeJob'] = { id: modeJobId }) : {}
    workingTimeId ? (where['workingTimeJob'] = { id: workingTimeId }) : {}

    const [vacancies, vacanciesCount] = await this.prisma.$transaction([
      this.prisma.jobOffers.findMany({
        where,
        orderBy,
        skip: page * limit - limit,
        take: limit,
        include: {
          ...this.includesAll,
          sectors: true,
          branch: true
        }
      }),
      this.prisma.jobOffers.count({ where })
    ])
    const pageCount = Math.ceil(vacanciesCount / limit)
    return {
      items: vacancies,
      count: vacanciesCount,
      pageCount
    }
  }

  async findAllSearch(searchTerm: string) {
    const search = await this.prisma.jobOffers.findMany({
      where: {
        AND: [
          { isValidate: true },
          {
            OR: [
              {
                title: {
                  search: searchTerm
                }
              },
              // {
              //   description: {
              //     search: searchTerm
              //   }
              // }
            ]
          }
        ]
      },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        agency: {
          select: {
            id: true,
            agency_name: true,
            phone: true,
            user: {
              select: {
                email: true
              }
            },
            address: true
          }
        },
        branch: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            location: true,
            address: true
          }
        },
        categories: {
          select: {
            name: true,
            slug: true,
            parent: {
              select: {
                name: true,
                slug: true,
                parent: {
                  select: {
                    name: true,
                    slug: true,
                  },
                },
              },
            }
          }
        }
      }
    })

    return search
  }

  async findAllOfUser(userId: string) {
    return await this.prisma.jobOffers.findMany({
      where: {
        agency: { userId }
      },
      include: {
        categories: {
          select: returnCategoryBaseObject
        }
      }
    })
  }

  async getJobsForMainCarousel(userId: string) {
    return await this.prisma.jobOffers.findMany({
      where: {
        isValidate: true
      },
      select: {
        slug: true,
        title: true,
        description: true,
        views: true,
        createdAt: true,
        agency: {
          select: {
            agency_name: true,
            logo: true,
            slug: true
          }
        },
        categories: {
          select: returnCategoryBaseObject
        },
        contractType: true,
        experienceMinimalJob: true,
        levelEducation: true,
        modeJob: true,
        workingTimeJob: true,
        reallyUpTo: true
      }
    })
  }

  async findOneBySlug(slug: string) {
    const existingJobOffer = await this.prisma.jobOffers.findUnique({
      where: { slug },
    });

    if (!existingJobOffer) {
      return false
    }

    await this.prisma.jobOffers.update({
      where: { slug },
      data: {
        views: {
          increment: 1
        }
      }
    })

    const jobData = await this.prisma.jobOffers.findFirst({
      where: {
        AND: [{
          slug
        }, {
          isValidate: true
        }]
      },
      include: {
        branch: true,
        sectors: true,
        ...this.includesAll
      },
    })
    return jobData
  }

  async findMetedataJobBySlug(slug: string) {
    const jobData = await this.prisma.jobOffers.findUnique({
      where: { slug },
      select: {
        title: true,
        description: true
      }
    });

    if (!jobData) {
      return false
    }

    return jobData
  }

  async findOneById(id: string) {
    const vacancie = await this.prisma.jobOffers.findUnique({
      where: { id },
      include: {
        categories: {
          select: { id: true }
        },
        tags: {
          select: {
            name: true
          }
        },
        sectors: {
          select: {
            id: true
          }
        }
      }
    })
    return vacancie
  }

  async confirmVacancy(id: string) {
    //const jobOffers = await this.findOne(id)
    return await this.prisma.jobOffers.update({
      where: { id },
      data: {
        isValidate: true
      }
    })
  }

  async remove(id: string, userId: string) {
    await this.prisma.jobOffers.deleteMany({
      where: {
        AND: [
          { id },
          { agency: { userId } }
        ]
      }
    })
    return true
  }

  async deleteMany(userId: string, ids: string[]) {
    const deleteMany = await this.prisma.jobOffers.deleteMany({
      where: {
        AND: [
          {
            id: {
              in: ids
            }
          },
          { agency: { userId } }
        ]
      }
    })
    return deleteMany
  }

  private async getAgencyDataId(userId: string) {
    return await this.prisma.agencyData.findUnique({
      where: {
        userId
      },
      select: {
        id: true
      }
    })
  }
}