import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    checkIfDomainIsAjou(email: string): boolean {
        const domain = email.split('@')[1];
        if (domain !== 'ajou.ac.kr') {
            return false;
        }
        return true;
    }

    // return 값 DTO로 바꾸는 것 고려해보기.
    async checkIfUserExists(email: string): Promise<any> {
        const checkDomain: boolean = this.checkIfDomainIsAjou(email);
        if (!checkDomain) {
            return {
                status: 0,
                msg: '아주대 도메인 아님.'
            }
        } else {
            const user = await this.userService.findByEmail(email);
            if (!user) {
                return {
                    status: 1,
                    msg: '사용자가 DB에 존재하지 않음.(최초 사용자임.)'
                }
            } else {
                return {
                    status: 2,
                    userIdx: user.userIdx,
                    msg: '사용자가 DB에 존재함.(등록된 사용자임.)'
                }
            }
        }
    }

    getCookieWithJwtAccessToken(userIdx: number) {
        const payload = { userIdx: userIdx };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`,
        });

        return {
            accessToken: token,
        };
    }

    getCookieWithJwtRefreshToken(id: number) {
        const payload = { id: id };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
        });

        return {
            refreshToken: token,
        };
    }

    // getCookiesForLogOut() {
    //     return {};
    // }

}
