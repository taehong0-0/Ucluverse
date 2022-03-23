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
        const result = await this.authService.checkIfUserExists(req.user.email);
        if (result.status == 2) {
            const { accessToken } = this.authService.getCookieWithJwtAccessToken(result.userIdx);
            const { refreshToken } = this.authService.getCookieWithJwtRefreshToken(result.userIdx);
            this.userService.setCurrentRefreshToken(refreshToken, result.userIdx);
            res.cookie('Authentication', accessToken);
            res.cookie('Refresh', refreshToken);
            res.send(result);
        } else {
            res.send(result);
        }      
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    refreshAccessToken(@Req() req, @Res() res: Response) {
        const { accessToken } = this.authService.getCookieWithJwtAccessToken(req.user.id); 
        res.cookie('Authentication', accessToken);
        res.send({
            msg: 'refreshed',
        });
    }

    @Get('logout')
    @UseGuards(JwtRefreshGuard)
    logout(@Req() req, @Res() res: Response) {
        this.userService.removeRefreshToken(req.user.id);
        res.clearCookie('Authentication');
        res.clearCookie('Refresh');
        res.send({
            msg: 'logout',
        });
    }
    
}
