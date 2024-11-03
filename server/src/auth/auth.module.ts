import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '@/user/user.service';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getRecaptchaConfig } from '@/config/recaptcha.config';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { MailService } from '@/libs/mail/mail.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
import { AgencyService } from '@/agency/agency.service';
import { FacebookStrategy, GoogleStrategy, JwtStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '@/config';

@Module({
  imports: [
    JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService]
    }),
    forwardRef(() => EmailConfirmationModule)
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, MailService, TwoFactorAuthService, AgencyService, JwtStrategy, GoogleStrategy, FacebookStrategy],
  exports:[AuthService]
})
export class AuthModule {}