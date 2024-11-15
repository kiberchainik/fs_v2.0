import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-telegram';

@Injectable()
export class TelegramStrategy extends PassportStrategy(Strategy, 'telegram') {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get('TELEGRAM_BOT_TOKEN'),
        });
    }

    async validate(
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, username, first_name, last_name, photo_url } = profile;

        const user = {
            telegramId: id,
            username,
            firstName: first_name,
            lastName: last_name,
            photoUrl: photo_url,
        };

        return done(null, user)
    }
}