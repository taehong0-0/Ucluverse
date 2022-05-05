import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChangeUserClubStatusDto } from './dto/change-userClubStatus.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { SignupClubDto } from './dto/signup-club.dto';
import { StarClubDto } from './dto/star-club.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User API')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Post('/signup')
    @ApiOperation({
        summary: '회원가입 API',
        description: '사용자 생성'
    })
    async signup(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);        
    }

    @Post(':userIdx')
    @ApiOperation({
        summary: '회원정보 수정 API',
    })
    async update(@Param('userIdx') userIdx: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(userIdx, updateUserDto);
    }

    @Post('checkDuplicateNickname')
    @ApiOperation({
        summary: '닉네임 중복 체크'
    })
    async checkDuplicateNickname(@Body('nickname') nickname: string){
        return this.userService.findDuplicateNickname(nickname);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idx')
    @ApiOperation({
        summary: '유저 아이디를 통해 찾은 유저 정보를 반환'
    })
    async getUser(@Param('idx') userIdx: number, @Res() res){
        res.send(await this.userService.findUser(userIdx));
    }

    @Post('userClub/signup')
    @ApiOperation({
        summary: '동아리 신청 API'
    })
    async signupClub(@Body() signupClubDto: SignupClubDto, @Res() res){
        res.send(await this.userService.signupClub(signupClubDto))
    }

    @Post('userClub/accept')
    @ApiOperation({
        summary: '동아리 신청 수락 API'
    })
    async acceptApplication(@Body() ChangeUserClubStatus: ChangeUserClubStatusDto, @Res() res){
        res.send(await this.userService.changeUserClubStatus(ChangeUserClubStatus, "accepted"));
    }

    @Post('userClub/reject')
    @ApiOperation({
        summary: '동아리 신청 거절 API'
    })
    async rejectApplication(@Body() ChangeUserClubStatus: ChangeUserClubStatusDto, @Res() res){
        res.send(await this.userService.changeUserClubStatus(ChangeUserClubStatus, "rejected"));
    }
    
    @Post('userClub/star')
    @ApiOperation({
        summary: '동아리 찜 API'
    })
    async starClub(@Body() starClubDto: StarClubDto, @Res() res){
        res.send(await this.userService.starClub(starClubDto));
    }
}
