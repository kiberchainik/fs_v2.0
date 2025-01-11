import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { CreateContactDto } from './dto/create-contact.dto'
import { Authorization } from '@/auth/decorators'
import { UserRole } from '@prisma/client'
import { ApiExcludeController } from '@nestjs/swagger'

@ApiExcludeController()
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @Authorization(UserRole.ADMIN)
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @Authorization(UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(+id);
  }

  @Delete(':id')
  @Authorization(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.contactsService.remove(+id);
  }
}
