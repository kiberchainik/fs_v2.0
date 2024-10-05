import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { render } from '@react-email/components';
import { ResetPasswordTemplate, ConfirmationTemplate, TwoFactorAuthTemplate } from './templates';

@Injectable()
export class MailService {
    constructor(
        private readonly mailer: MailerService,
        private readonly config: ConfigService
    ) {}

    public async sendConfirmationEmail (email:string, token: string) {
        const domain = this.config.getOrThrow<string>('ALLOWED_ORIGIN')
        const html = await render(ConfirmationTemplate({domain, token}))

        return this.sendMail(email, 'Confirm email', html)
    }

    public async sendPasswordResetEmail (email:string, token: string) {
        const domain = this.config.getOrThrow<string>('ALLOWED_ORIGIN')
        const html = await render(ResetPasswordTemplate({domain, token}))

        return this.sendMail(email, 'Reset Password', html)
    }

    public async sendTwoFactorCodeEmail (email:string, code: string) {
        const html = await render(TwoFactorAuthTemplate({code}))

        return this.sendMail(email, 'Two factor auth', html)
    }

    private sendMail(to: string, subject: string, html: string) {
        return this.mailer.sendMail({
            to,
            subject,
            html
        })
    }
}