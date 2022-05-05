import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtRefreshGuard } from './jwt-refresh.guard';

@Controller('auth')
@ApiTags('인증 API')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Get('isLogin')
    async isLogin(@Req() req: Request) {
        return this.authService.isLogin(req.cookies);
    }

    @Get('login')
    @ApiOperation({
        summary: '로그인 API',
    })
    async login(@Res() res: Response, @Query('email') email: string) {
        const {
            access,
            refresh,
            result
        } = await this.authService.googleLogin(email);
        if ( access !== undefined ) {
            res.header('Access-Control-Allow-Credentials','true');
            res.cookie('Authentication', access.accessToken, {
                httpOnly: access.accessOption.httpOnly,
                maxAge: access.accessOption.maxAge,
                secure: access.accessOption.secure,
                sameSite: "none",
            });
            const {  maxAge, secure, httpOnly } = refresh.refreshOption;
            res.cookie('Refresh', refresh.refreshToken, {
                httpOnly,
                maxAge,
                secure,
                sameSite: "none",
            });
        }
        res.send(result);
    }

    @Get('refresh')
    @ApiOperation({
        summary: '액세스 토큰 재발급 API',
    })
    @UseGuards(JwtRefreshGuard)
    refreshAccessToken(@Req() req: Request, @Res() res: Response) {
        const { userIdx } = this.authService.decodeAccessToken(req.cookies.Authentication);
        const { accessToken, ...accessOption } = this.authService.getCookieWithJwtAccessToken(userIdx); 
        res.cookie('Authentication', accessToken, accessOption);
        res.send({
            msg: 'refreshed',
        });
    }

    @Get('logout')
    @ApiOperation({
        summary: '로그아웃 API',
    })
    @UseGuards(JwtRefreshGuard)
    logout(@Req() req: Request, @Res() res: Response) {
        const { userIdx } = this.authService.decodeAccessToken(req.cookies.Authentication);
        this.userService.removeRefreshToken(userIdx);
        res.clearCookie('Authentication');
        res.clearCookie('Refresh');
        res.send({
            msg: 'logout',
        });
    }
    
}
