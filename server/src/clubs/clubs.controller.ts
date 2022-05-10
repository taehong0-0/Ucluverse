import { Body, Controller, Get, Header, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClubsService } from './clubs.service';
import { CreateClubBoardDto } from './dto/create-clubBoard.dto';

@Controller('clubs')
@ApiTags('동아리 API')
export class ClubsController {
    constructor(
        private readonly clubsService: ClubsService,
    ){}

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
    async getCentralClubs() {
        return this.clubsService.getCentralClubs();
    }

    @Get('department')
    @ApiOperation({
        summary: '(과소속)소학회 목록 불러오기 API',
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
