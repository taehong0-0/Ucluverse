import { Body, Controller, Get, Header, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClubsService } from './clubs.service';
import { ClubsWithCategoriesAndClubBoardsResDto } from './dto/club-respones.dto';
import { CreateClubBoardDto } from './dto/create-clubBoard.dto';
import { PatchClubInfoDto } from './dto/patch-clubInfo.dto';

@Controller('clubs')
@ApiTags('동아리 API')
export class ClubsController {
    constructor(
        private readonly clubsService: ClubsService,
    ){}

    @Get('club/:clubIdx')
    @ApiOperation({
        summary: '동아리 인덱스에 대한 동아리 정보 불러오기 API',
    })
    async getClubInfoByClubIdx(@Param('clubIdx') clubIdx : number, @Res() res){
        return res.send(await this.clubsService.getClubInfoByClubIdx(clubIdx));
    }

    @Get('users/:clubIdx')
    @ApiOperation({
        summary: '동아리에 대한 회원들 정보 불러오기 API',
    })
    async getClubUsers(@Param('clubIdx') clubIdx: number, @Res() res){
        return res.send(await this.clubsService.getClubUsers(clubIdx));
    }

    @Get('newClubs')
    @ApiOperation({
        summary: '생성된지 한달 이내 동아리들 불러오기 API',
    })
    async getNewClubs(@Res() res){
        return res.send(await this.clubsService.getNewClubs());
    }

    @Get('central')
    @ApiOperation({
        summary: '(중앙)동아리 목록 불러오기 API',
    })
    @ApiOkResponse({
        type: ClubsWithCategoriesAndClubBoardsResDto,
    })
    async getCentralClubs() {
        return this.clubsService.getCentralClubs();
    }

    @Get('department')
    @ApiOperation({
        summary: '(과소속)소학회 목록 불러오기 API',
    })
    @ApiOkResponse({
        type: ClubsWithCategoriesAndClubBoardsResDto,
    })
    async getDepartmentClubs() {
        return this.clubsService.getDepartmentClubs();
    }

    @Post('clubBoard')
    @ApiOperation({
        summary: '동아리 게시판 생성 API',
    })
    async createClubBoard(@Body() createClubBoardDto: CreateClubBoardDto, @Res() res){
        return res.send(await this.clubsService.createClubBoard(createClubBoardDto));
    }

    @Patch(':clubIdx')
    @ApiOperation({
        summary: '동아리 기본 정보 수정 API',
    })
    async patchClubInfo(@Param('clubIdx') clubIdx: number, @Body() patchClubInfoDto: PatchClubInfoDto, @Res() res){
        return res.send(await this.clubsService.patchClubInfo(patchClubInfoDto, clubIdx));
    }

    @Get('makeExcel/:clubIdx')
    @ApiOperation({
        summary: '동아리 회원 정보 엑셀 시트로 생성 API',
    })
    @Header('ContentType', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    @Header('Content-Disposition', 'attachment; filename=users.xlsx')
    async makeExcel(@Param('clubIdx') clubIdx, @Res() res){
        return res.send(Buffer.from(await this.clubsService.makeExcel(clubIdx), 'base64'));
    }
}
