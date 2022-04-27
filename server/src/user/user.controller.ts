import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChangeUserClubStatusDto } from './dto/change-userClubStatus.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { SignupClubDto } from './dto/signup-club.dto';
import { StarClubDto } from './dto/star-club.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ){}

    @Post('/signup')
    async signup(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);        
    }

    @Post(':userIdx')
    async update(@Param('userIdx') userIdx: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(userIdx, updateUserDto);
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

    @Post('userClub/signup')
    async signupClub(@Body() signupClubDto: SignupClubDto, @Res() res){
        res.send(await this.userService.signupClub(signupClubDto))
    }

    @Post('userClub/accept')
    async acceptApplication(@Body() ChangeUserClubStatus: ChangeUserClubStatusDto, @Res() res){
        res.send(await this.userService.changeUserClubStatus(ChangeUserClubStatus, "accepted"));
    }

    @Post('userClub/reject')
    async rejectApplication(@Body() ChangeUserClubStatus: ChangeUserClubStatusDto, @Res() res){
        res.send(await this.userService.changeUserClubStatus(ChangeUserClubStatus, "rejected"));
    }
    
    @Post('userClub/star')
    async starClub(@Body() starClubDto: StarClubDto, @Res() res){
        res.send(await this.userService.starClub(starClubDto));
    }
}
