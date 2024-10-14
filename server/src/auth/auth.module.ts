import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '@/user/user.service';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getRecaptchaConfig } from '@/config/recaptcha.config';
import { ProviderModule } from './provider/provider.module';
import { getProvidersConfig } from '@/config/providers.config';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { MailService } from '@/libs/mail/mail.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import { AgencyService } from '@/agency/agency.service';

@Module({
  imports: [
    ProviderModule.registerAsync({
      imports:[ConfigModule],
      useFactory: getProvidersConfig,
      inject:[ConfigService]
    }),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService]
    }),
    forwardRef(() => EmailConfirmationModule)
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, MailService, TwoFactorAuthService, AgencyService],
  exports:[AuthService]
})
export class AuthModule {}