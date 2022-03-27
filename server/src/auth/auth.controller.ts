import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './google-auth.guard';
import { JwtRefreshGuard } from './jwt-refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Req() req) {}

    @Get('google/callback')
    @UseGuards(GoogleAuthGuard)
    async googleAuthRedirect(@Req() req, @Res() res: Response) {
        const {accessToken, refreshToken, result} = await this.authService.googleLogin(req);
        if(accessToken!==undefined){
            res.cookie('Authentication', accessToken);
            res.cookie('Refresh', refreshToken);
        }
        res.send(result);
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    refreshAccessToken(@Req() req, @Res() res: Response) {
        const { accessToken } = this.authService.getCookieWithJwtAccessToken(req.user.userIdx); 
        res.cookie('Authentication', accessToken);
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
