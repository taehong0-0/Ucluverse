import { Controller, Get, Param, Res } from '@nestjs/common';
import { PostingsService } from './postings.service';

@Controller('postings')
export class PostingsController {
    constructor(
        private readonly postingsService: PostingsService,
    ){}

    @Get('clubBoard/:clubBoardIdx')
    async getPostingsByClubBoard(@Param('clubBoardIdx') clubBoardIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingsByClubBoard(clubBoardIdx));
    }
}
