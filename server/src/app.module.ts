import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.utils';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module'
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { MailModule } from './libs/mail/mail.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { AgencyModule } from './agency/agency.module';
import { CandidatModule } from './candidat/candidat.module';
import { FileModule } from './libs/file/file.module';
import { CategoryModule } from './admin/category/category.module';
import { ContractTypeModule } from './admin/contract-type/contract-type.module';
import { ExperienceMinimalModule } from './admin/experience-minimal/experience-minimal.module';
import { ModeJobModule } from './admin/mode-job/mode-job.module';
import { WorkingTimeModule } from './admin/working-time/working-time.module';
import { LevelEducationModule } from './admin/level-education/level-education.module';
import { OpenAIModule } from './admin/openai/openai.model';
import { RatingModule } from './rating/rating.module';
import { ChatModule } from './messenger/chat.module';
import { ContactsModule } from './contacts/contacts.module';
import { RestrictAccessMiddleware } from './restrict-access.middleware';
import { JobParserModule } from './admin/job-parser/job-parser.module';
import { SitemapModule } from './admin/sitemap/sitemap.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    MailModule,
    EmailConfirmationModule,
    PasswordRecoveryModule,
    TwoFactorAuthModule,
    AgencyModule,
    CandidatModule,
    FileModule,
    CategoryModule,
    ContractTypeModule,
    ExperienceMinimalModule,
    ModeJobModule,
    WorkingTimeModule,
    LevelEducationModule,
    OpenAIModule,
    RatingModule,
    ChatModule,
    ContactsModule,
    JobParserModule,
    SitemapModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RestrictAccessMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
