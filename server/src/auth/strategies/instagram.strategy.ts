import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-instagram';

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
    constructor() {
        super({
            clientID: process.env.INSTAGRAM_CLIENT_ID, // ID приложения Instagram
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET, // Секретный ключ
            callbackURL: process.env.INSTAGRAM_CALLBACK_URL, // URL возврата после авторизации
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, username, displayName, photos } = profile;

        const user = {
            instagramId: id,
            username,
            displayName,
            photo: photos?.[0]?.value
        };

        return done(null, user);
    }
}