import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto, CreateSectorDto, UpdateCategoryDto, UpdateSectorDto } from './dto'
import { PrismaService } from '@/prisma/prisma.service'
import { Prisma } from 'prisma/__generated__'
import { DBError } from '@/utils'

@Injectable()
export class CategoryService {
  constructor(private readonly prisma:PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const nestedCategories = createCategoryDto.parentId?.map((id) => ({
      id
    })) || []

    const sectors = createCategoryDto.sectorIds?.map((id) => ({id})) || []

    const category = await this.prisma.category.findUnique({
      where: {
        name: createCategoryDto.name
      }
    })

    if (category) throw new BadRequestException('Категория с таким названием уже существует. Название и seo должны быть уникальными!')
    
    try {
      return await this.prisma.category.create({
        data: {
          name: createCategoryDto.name,
          slug: createCategoryDto.seo,
          description: createCategoryDto.description,
          sectors: {
            connect: sectors
          },
          children: {
            connect: nestedCategories
          }
        },
        include: {
          children: true
        }
      })
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === DBError.ConnectedRecordsNotFound
      ) {
        console.log(err)
        throw new ConflictException('Некоторые из предоставленых ИД категорий не верны')
      }
    }
  }

  async createSector (sectorDto:CreateSectorDto) {
    if(!this.findOne(sectorDto.categoryId)) throw new BadRequestException(`Нельзя создать секстор т.к. категория с id ${sectorDto.categoryId} не существует`)

    return await this.prisma.sectors.create({
      data: {
        name: sectorDto.name,
        slug: sectorDto.seo,
        categoryId: sectorDto.categoryId
      }
    })
  }

  async findOnebySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: { slug },
			include: { jobOffers: true }
		})
		if (!category) throw new NotFoundException('CATEGORY_NOT_FOUND')
		return category
	}

	async byName(name: string) {
		const category = await this.prisma.category.findUnique({
			where: { name }
		})
		return category
	}

	async getByIds(ids: string[]) {
		const category = await this.prisma.category.findMany({
			where: {
				OR: ids.map(id => ({ id }))
			},
      select: {
        id:true,
        slug: true,
        name: true,
        sectors: true,
        children: true
      }
		})
		return category
	}

  async findAll() {
    return await this.prisma.category.findMany({
      include: {
        children: true
      }
    })
  }

  async findAllSectors() {
    return await this.prisma.sectors.findMany({
      include: {
        category: {
          select: {
            name: true,
            slug: true
          }
        }
      }
    })
  }

  private includeChildrenCategories(maxumumLevel: number):boolean | Prisma.Category$childrenArgs {
    if(maxumumLevel === 1) {
      return true
    }

    return {
      include: {
        children: this.includeChildrenCategories(maxumumLevel - 1)
      }
    }
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: {id},
      include: {
        children: true
      }
    })

    if(!category) throw new NotFoundException('Категории не существует')
    
    return category
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const nestedCategories = updateCategoryDto.parentId?.map((id) => ({
        id
      })) || []

      return await this.prisma.category.update({
        data: {
          name: updateCategoryDto.name,
          slug: updateCategoryDto.seo,
          description: updateCategoryDto.description,
          children: {
            connect: nestedCategories
          }
        },
        include: {
          children: true
        },
        where: {
          id
        }
      })
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === DBError.ConnectedRecordsNotFound
      ) {
        console.log(err)
        throw new ConflictException('Некоторые из предоставленых ИД категорий не верны')
      }
    }
  }

  async updateSector(id:string, sectorDto:UpdateSectorDto) {
    if(!this.findOne(sectorDto.categoryId)) throw new BadRequestException(`Нельзя обновить секстор т.к. категория с id ${sectorDto.categoryId} не существует`)

    return await this.prisma.sectors.update({
      where: {id},
      data: UpdateSectorDto
    })
  }

  async remove(id: string) {
    this.findOne(id)
    return await this.prisma.category.delete({where: {id}})
  }

  async removeSector(id: string) {
    return await this.prisma.sectors.delete({where: {id}})
  }
}
