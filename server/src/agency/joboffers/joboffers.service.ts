import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateJobofferDto, UpdateJobofferDto, JobOffersDto, returnTagsObject } from './dto'
import { CategoryService } from 'src/admin/category/category.service';
import { Prisma } from 'prisma/__generated__';
import { returnCategoryBaseObject } from 'src/admin/category/dto'
import { returnAgencyBaseObject } from 'src/agency/dto'
import { PrismaService } from '@/prisma/prisma.service';
import { slugify } from '@/utils';

@Injectable()
export class JoboffersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService
  ) {}

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
    contractType:{
      select: {name: true}
    },
    experienceMinimalJob:{
      select: {name: true}
    },
    levelEducation: {
      select: {name: true}
    },
    modeJob: {
      select: {name: true}
    },
    workingTimeJob: {
      select: {name: true}
    }
	}

  async create(userId:string, createJobofferDto: CreateJobofferDto) {
    const offersExist = await this.prisma.jobOffers.findFirst({
      where: {title: createJobofferDto.title}
    })

    
    const {id} = await this.getAgencyDataId(userId)
    
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
    
    if(offersExist !== null) createJobofferDto.title = slug + '_' + createJobofferDto.location
    //const existsCategories = await this.categoryService.getById(categoryIds)
    //const categoriesIds = existsCategories.map((catId) =>({id: catId.id}))

    const jobTags = tags?.map((tag) => ({
      name: tag, slug: slugify(tag)
    })) || []

    const jobSectors = sectors?.map((id) => ({
      id
    })) || []

    const optionals = {
      contractType: contractTypeId ? ({ connect: { id: contractTypeId }}) : {},
      experienceMinimalJob: experienceMinimalId ? ({ connect: { id: experienceMinimalId }}) : {},
      levelEducation: levelEducationId ? ({ connect: { id: levelEducationId }}) : {},
      modeJob: modeJobId ? ({ connect: { id: modeJobId }}) : {},
      workingTimeJob: workingTimeId ? ({ connect: { id: workingTimeId }}) : {}
    }

    if(id) {
      const newJob = await this.prisma.jobOffers.create({
        data: {
          ...jobOffers,
          slug: slugify(createJobofferDto.title),
          categories: {
            connect: {id: categories}
          },
          sectors: {
            connect: jobSectors
          },
          tags: {
            create: jobTags
          },
          agency: {
            connect: {id}
          },
          ...optionals
        },
        include: {
          ...this.includesAll,
          sectors: true,
          branch: true
        }
      })

      if(branchId) {
        await this.prisma.jobOffers.update({
          where: {id: newJob.id},
          data: {branchId}
        })
      }

      return newJob
    } else throw new NotFoundException('Заполните все данные о агентстве!')
  }

  async update(idJob: string, userId:string, updateJobofferDto: UpdateJobofferDto) {
    const {title, tags} = await this.prisma.jobOffers.findFirst({
      where: {
        AND: [
          {id: idJob},
          {agency: {userId}}
        ]
      },
      select: {
        title: true,
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
  
    if(vTags) {
      await this.prisma.jobTags.deleteMany({
        where: {
          id: {
            in: tags.map(i => i.id)
          }
        }
      })
    }

    if(title !== updateJobofferDto.title) {
      updateJobofferDto.slug = `${slugify(updateJobofferDto.title)}_${idJob}`
      //if(isExist) throw new NotAcceptableException('According to the rules of the site, vacancies cannot have the same title')
    }

    const jobTags = vTags?.map((tag) => ({
      name: tag, slug: slugify(tag)
    })) || []

    const jobSectors = sectors?.map((id) => ({
      id
    })) || []

    const optionals = {
      contractType: contractTypeId ? ({ connect: { id: contractTypeId }}) : {},
      experienceMinimalJob: experienceMinimalId ? ({ connect: { id: experienceMinimalId }}) : {},
      levelEducation: levelEducationId ? ({ connect: { id: levelEducationId }}) : {},
      modeJob: modeJobId ? ({ connect: { id: modeJobId }}) : {},
      workingTimeJob: workingTimeId ? ({ connect: { id: workingTimeId }}) : {}
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
              slug: updateJobofferDto.slug,
              categories: {
                connect: {id: categories}
              },
              sectors: {
                connect: jobSectors
              },
              tags: {
                create: jobTags
              },
              ...optionals,
              branch: {
                connect: {id: branchId}
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

  async findAll({isValidate, agencyId, branchId, categoryId, tagId, byPopularity, limit, page}: JobOffersDto) {
    const where: Prisma.jobOffersWhereInput = { isValidate }
		const orderBy: Prisma.jobOffersOrderByWithRelationInput[] = []

    if (byPopularity) {
			orderBy.push({ views: 'desc' })
		}
		
		orderBy.push({ createdAt: 'desc' })
		agencyId ? (where['agency'] = { id: agencyId }) : {}
		branchId ? (where['branch'] = { id: branchId }) : {}
		categoryId ? (where['categories'] =  { id: categoryId } ) : {}
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

  async findAllOfUser(userId:string) {
			return await this.prisma.jobOffers.findMany({
				where:{
          agency: {userId}
        }
			})
  }

  async findOneBySlug(slug: string) {
		const vacancie = await this.prisma.jobOffers.findMany({
			where: {
        AND: [{
          slug
        }, {
          isValidate:true
        }]
      },
			include: {
        ...this.includesAll,
        sectors: true,
        branch: true
      }
		})

		if (!vacancie) throw new NotFoundException('ARTICLE_NOT_FOUND')
		await this.prisma.jobOffers.update({
			where: { slug },
			data: {
				views: {
					increment: 1
				}
			}
		})
		return vacancie
	}

  async findOneById(id: string) {
		const vacancie = await this.prisma.jobOffers.findUnique({
			where: {id},
      include: {
        categories: {
          select: {id: true}
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

  async remove(id: string, userId:string) {
    await this.prisma.jobOffers.deleteMany({
      where: {
        AND: [
          {id},
          {agency: {userId}}
        ]
      }
    })
    return true
  }

  private async getAgencyDataId (userId:string) {
    return await this.prisma.agencyData.findUnique({
      where:{
        userId
      },
      select: {
        id: true
      }
    })
  }
}
