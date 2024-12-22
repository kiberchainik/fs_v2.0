import { isDev } from "@/libs/common/utils/is-dev.utils";
import { MailerOptions } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";

export const getMailerConfig = async (config: ConfigService): Promise<MailerOptions> => ({
    transport: {
        host: config.getOrThrow<string>('EMAIL_HOST'),
        port: config.getOrThrow<number>('EMAIL_PORT'),
        secure: true, //!isDev(config),
        auth: {
            user: config.getOrThrow<string>('EMAIL_USER'),
            pass: config.getOrThrow<string>('EMAIL_PASSWORD')
        }
    },
    defaults: {
        from: `From ${config.getOrThrow<string>('MAIL_FROM_EMAIL')}`
    }
})