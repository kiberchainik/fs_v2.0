import { Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class SocialService {
  constructor(private readonly prisma: PrismaService) { }

  async create(userId: string, createSocialDto: CreateSocialDto) {
    return await this.prisma.userSocial.create({
      data: {
        socialLink: createSocialDto.social,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

  async findAll(userId: string) {
    return await this.prisma.userSocial.findMany({
      where: {
        usId: userId
      }
    })
  }

  async update(userId: string, id: string, updateSocialDto: UpdateSocialDto) {
    return await this.prisma.userSocial.updateMany({
      where: {
        AND: [
          {
            user: {
              id: userId
            }
          },
          { id }
        ]
      },
      data: {
        socialLink: updateSocialDto.social
      }
    })
  }

  async remove(userId: string, id: string) {
    return await this.prisma.userSocial.deleteMany({
      where: {
        AND: [
          {
            user: {
              id: userId
            }
          },
          { id }
        ]
      }
    })
  }
}
