import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MailModule } from '@/libs/mail/mail.module';
import { MailService } from '@/libs/mail/mail.service';

@Module({
  imports: [MailModule],
  controllers: [ContactsController],
  providers: [ContactsService, MailService],
})
export class ContactsModule { }
