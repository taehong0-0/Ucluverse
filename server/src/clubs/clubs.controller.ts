import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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
}
