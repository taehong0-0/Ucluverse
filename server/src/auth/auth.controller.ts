import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
// import { GoogleAuthGuard } from './google-auth.guard';
import { JwtRefreshGuard } from './jwt-refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    // @Get('google')
    // @UseGuards(GoogleAuthGuard)
    // async googleAuth(@Req() req) {}

    // @Get('google/callback')
    // @UseGuards(GoogleAuthGuard)
    // async googleAuthRedirect(@Req() req, @Res() res: Response) {
    //     const { 
    //         access, 
    //         refresh, 
    //         result 
    //     } = await this.authService.googleLogin(req.user);
    //     if ( access !== undefined ) {
            // res.cookie('Authentication', access.accessToken, access.accessOption);
            // res.cookie('Refresh', refresh.refreshToken, refresh.refreshOption);
    //     }
    //     res.send(result);
    // }
    @Get('login')
    async login(@Res() res: Response, @Query('email') email: string) {
        const {
            access,
            refresh,
            result
        } = await this.authService.googleLogin(email);
        if (access !== undefined ) {
            res.cookie('Authentication', access.accessToken, access.accessOption);
            res.cookie('Refresh', refresh.refreshToken, refresh.refreshOption);
        }
        res.send(result);
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    refreshAccessToken(@Req() req, @Res() res: Response) {
        const { accessToken, ...accessOption } = this.authService.getCookieWithJwtAccessToken(req.user.userIdx); 
        res.cookie('Authentication', accessToken, accessOption);
        res.send({
            msg: 'refreshed',
        });
    }

    @Get('logout')
    @UseGuards(JwtRefreshGuard)
    logout(@Req() req, @Res() res: Response) {
        this.userService.removeRefreshToken(req.user.userIdx);
        res.clearCookie('Authentication');
        res.clearCookie('Refresh');
        res.send({
            msg: 'logout',
        });
    }
    
}
