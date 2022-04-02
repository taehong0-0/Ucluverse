import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
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
}
