import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
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

    async checkIfUserExists(email: string): Promise<any> {
        const checkDomain: boolean = this.checkIfDomainIsAjou(email);
        if (!checkDomain) {
            return new LoginResponseDto(0, '아주대 도메인 아님', null, null);
        } else {
            const user = await this.userService.findByEmail(email);
            if (!user) {
                return new LoginResponseDto(1, '사용자가 DB에 존재하지 않음.(최초 사용자임.)', null, email);
            } else {
                return new LoginResponseDto(2, '사용자가 DB에 존재함.(등록된 사용자임.)', user.userIdx, email);
            }
        }
    }

    async googleLogin(req){
        const result = await this.checkIfUserExists(req.user.email);
        if (result.status == 2) {
            const {accessToken, refreshToken} = await this.getTokens(req.user.userIdx);
            return { accessToken, refreshToken, result}
        } else {
            return { result }
        }
    }

    getTokens(userIdx){
        const { accessToken } = this.getCookieWithJwtAccessToken(userIdx);
        const { refreshToken } = this.getCookieWithJwtRefreshToken(userIdx);
        this.userService.setCurrentRefreshToken(refreshToken, userIdx);
        return { accessToken, refreshToken }
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
