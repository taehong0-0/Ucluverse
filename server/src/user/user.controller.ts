import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Post('/signup')
    async signup(@Body() createUserDto: CreateUserDto, @Res() res: Response){
        const {accessToken, refreshToken, result} = await this.userService.createUser(createUserDto);
        res.cookie('Authentication', accessToken);
        res.cookie('Refresh', refreshToken);
        res.send(result);
    }

    @Post('duplicateNickname')
    async duplicateNickname(@Body('nickname') nickname: string){
        return this.userService.findDuplicateNickname(nickname);
    }
}
