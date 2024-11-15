import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-linkedin-oauth2';

@Injectable()
export class LinkedInStrategy extends PassportStrategy(Strategy, 'linkedin') {
    constructor() {
        super({
            clientID: process.env.LINKEDIN_CLIENT_ID, // ID приложения LinkedIn
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET, // Секретный ключ приложения
            callbackURL: process.env.LINKEDIN_CALLBACK_URL, // URL возврата
            scope: ['r_emailaddress', 'r_liteprofile'], // Запрашиваемые данные
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, displayName, emails, photos } = profile;

        const user = {
            linkedinId: id,
            displayName,
            email: emails?.[0]?.value,
            photo: photos?.[0]?.value,
        };

        return done(null, user); // Возвращаем пользователя
    }
}