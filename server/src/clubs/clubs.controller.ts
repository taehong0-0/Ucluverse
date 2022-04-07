import { Controller, Get, Res } from '@nestjs/common';
import { ClubsService } from './clubs.service';

@Controller('clubs')
export class ClubsController {
    constructor(
        private readonly clubsService: ClubsService,
    ){}

    @Get('newClubs')
    async getNewClubs(@Res() res){
        return res.send(await this.clubsService.getNewClubs());
    }
}
