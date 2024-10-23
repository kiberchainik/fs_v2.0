import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobofferDto, UpdateJobofferDto, JobOffersDto, returnTagsObject } from './dto'
import { CategoryService } from 'src/category/category.service';
import { Prisma } from 'prisma/__generated__';
import { returnCategoryBaseObject } from 'src/category/dto'
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
    }
	}

  async create(userId:string, createJobofferDto: CreateJobofferDto) {
    const offersExist = await this.prisma.jobOffers.findFirst({
      where: {title: createJobofferDto.title}
    })

    if(offersExist !== null) throw new NotFoundException('Вакансия с таким названием уже существует!')
    
    const {id} = await this.getAgencyDataId(userId)
    
    const {categoryIds, branchId, tags, sectors, slug, ...jobOffers} = createJobofferDto

    const existsCategories = await this.categoryService.getByIds([...categoryIds])
    const categoriesIds = existsCategories.map((catId) =>({id: catId.id}))

    const jobTags = tags?.map((tag) => ({
      name: tag, slug: slugify(tag)
    })) || []

    const jobSectors = sectors?.map((id) => ({
      id
    })) || []

    if(typeof id === 'string') {
      const newJob = await this.prisma.jobOffers.create({
        data: {
          ...jobOffers,
          slug: slugify(createJobofferDto.title),
          categories: {
            connect: categoriesIds
          },
          sectors: {
            connect: jobSectors
          },
          tags: {
            create: jobTags
          },
          agency: {
            connect: {id}
          }
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

  async findAll({count = 10, page = 1, isValidate, agencyId, categoryId, tagId, byPopularity}: JobOffersDto) {
    const where: Prisma.jobOffersWhereInput = { isValidate }
		const orderBy: Prisma.jobOffersOrderByWithRelationInput[] = []
    
    if (byPopularity) {
			orderBy.push({ views: 'desc' })
		}
		
		orderBy.push({ createdAt: 'desc' })
		agencyId ? (where['agency'] = { id: agencyId }) : {}
		categoryId ? (where['categories'] = { some: { id: categoryId } }) : {}
		tagId ? (where['tags'] = { some: { id: tagId } }) : {}

    const [vacancies, vacanciesCount] = await this.prisma.$transaction([
			this.prisma.jobOffers.findMany({
				where,
				orderBy,
				skip: page * count - count,
				take: count,
				include: {
					...this.includesAll,
          //tags: true,
          sectors: true,
          branch: true
				}
			}),
			this.prisma.jobOffers.count({ where })
		])
		const pageCount = Math.ceil(vacanciesCount / count)
		return {
			items: vacancies,
			count: vacanciesCount,
			pageCount
		}
  }

  async findOne(id: string) {
    const vacancie = await this.prisma.jobOffers.findMany({
			where: { 
        AND: [{
          id
        }, {
          isValidate:true
        }]
      },
			include: {
        tags: true,
        categories: true,
        sectors: true,
        agency: true,
        branch: true
      }
		})
		if (!vacancie) throw new NotFoundException('ARTICLE_NOT_FOUND')
		await this.prisma.jobOffers.update({
			where: { id },
			data: {
				views: {
					increment: 1
				}
			}
		})
		return vacancie
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
        //tags: true,
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

  async confirmArticle(id: string) {
		const jobOffers = await this.findOne(id)
		return await this.prisma.jobOffers.update({
			where: { id },
			data: {
				isValidate: true
			},
			include: {
        ...this.includesAll,
        //tags: true,
        sectors: true,
        branch: true
      }
		})
	}

  async update(id: string, userId:string, updateJobofferDto: UpdateJobofferDto) {
    const adId = await this.getAgencyDataId(userId)
    return `This action updates a #${id} joboffer`;
  }

  async remove(id: string, userId:string) {
    const adId = await this.getAgencyDataId(userId)
    return `This action removes a #${id} joboffer`;
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
