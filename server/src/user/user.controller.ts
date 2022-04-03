import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ){}

    @Post('/signup')
    @UseInterceptors(FilesInterceptor('files'))
    async signup(@Body() createUserDto: CreateUserDto, @Res() res: Response, @UploadedFiles() files: Array<Express.Multer.File>){
        const { access, refresh, result } = await this.userService.createUser(createUserDto);
        await this.userService.saveProfilePath(result.userIdx, files);
        res.cookie('Authentication', access.accessToken, access.accessOption);
        res.cookie('Refresh', refresh.refreshToken, refresh.refreshOption);
        res.send(result);
    }

    @Post('checkDuplicateNickname')
    async checkDuplicateNickname(@Body('nickname') nickname: string){
        return this.userService.findDuplicateNickname(nickname);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idx')
    async getUser(@Param('idx') userIdx: number, @Res() res){
        res.send(await this.userService.findUser(userIdx));
    }
}
