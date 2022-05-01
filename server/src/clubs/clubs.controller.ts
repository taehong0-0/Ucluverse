import { Body, Controller, Get, Header, Param, Post, Res } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubBoardDto } from './dto/create-clubBoard.dto';

@Controller('clubs')
export class ClubsController {
    constructor(
        private readonly clubsService: ClubsService,
    ){}

    @Get('newClubs')
    async getNewClubs(@Res() res){
        return res.send(await this.clubsService.getNewClubs());
    }

    @Post('clubBoard')
    async createClubBoard(@Body() createClubBoardDto: CreateClubBoardDto, @Res() res){
        return res.send(await this.clubsService.createClubBoard(createClubBoardDto));
    }

    @Get('makeExcel/:clubIdx')
    @Header('ContentType', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    @Header('Content-Disposition', 'attachment; filename=users.xlsx')
    async makeExcel(@Param('clubIdx') clubIdx, @Res() res){
        return res.send(Buffer.from(await this.clubsService.makeExcel(clubIdx), 'base64'));
    }
}
