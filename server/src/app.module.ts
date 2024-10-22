import { Module } from '@nestjs/common';
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
import { CategoryModule } from './category/category.module';

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
    CategoryModule
  ],
})
export class AppModule {}
