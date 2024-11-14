import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(private configService: ConfigService) {
		super({
			clientID: '1074482357436-dt60dqpng32g76351gkjum04emospdqq.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: 'https://fs-v2-0.onrender.com/api/auth/google/callback',
			scope: ['profile', 'email']
		})
	}

	async validate(
		_accessToken: string,//используем свой
		_refreshToken: string, //используем свой
		profile: Profile,
		done: VerifyCallback //при успешном запросе
	) {
		const { displayName, emails, photos } = profile

		const user = {
			email: emails[0].value,
			name: displayName,
			picture: photos[0].value
		}

		done(null, user)
	}
}
