import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { MailService } from '@/libs/mail/mail.service';

@Injectable()
export class ContactsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) { }
  async create(createContactDto: CreateContactDto) {
    const res = await this.prisma.contacts.create({
      data: {
        ...createContactDto
      }
    })

    if (res) {
      this.mail.sendFeedBackEmail('ya.sacher@gmail.com', createContactDto.name, createContactDto.email, createContactDto.message)
    }
  }

  findAll() {
    return `This action returns all contacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
