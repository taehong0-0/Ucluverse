import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
			private readonly configService: ConfigService
		) {
        super({
            clientID: configService.get('GOOGLE_CLIENTID'),
            clientSecret: configService.get('GOOGLE_CLIENTSECRET'),
            callbackURL: 'http://ucluverse-lb-285634398.ap-northeast-2.elb.amazonaws.com/auth/google/callback',
            scope: ['email', 'profile'],
        });
    }
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            accessToken,
            refreshToken,
        };
        done(null, user);
    }
}