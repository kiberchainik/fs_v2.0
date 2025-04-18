import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get('FACEBOOK_ID'),
      clientSecret: configService.get('FACEBOOK_SECRET'),
      callbackURL: configService.get('ALLOWED_ORIGIN') + '/api/auth/facebook/redirect',
      scope: "email",
      profileFields: ["emails", "name"]
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void
  ): Promise<any> {
    const { name, emails } = profile

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    }

    done(null, user);
  }
}