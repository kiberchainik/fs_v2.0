import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-instagram';

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get('INSTAGRAM_CLIENT_ID'),
            clientSecret: configService.get('INSTAGRAM_CLIENT_SECRET'),
            callbackURL: configService.get('INSTAGRAM_CALLBACK_URL'),
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