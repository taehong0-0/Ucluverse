import { Controller, Param, Post, Res } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './entity/create-award.dto';

@Controller('awards')
export class AwardsController {
    constructor(
        private readonly awardsService: AwardsService,
    ){}

    @Post('award')
    async createAward(@Param('clubIdx') createAwardDto: CreateAwardDto, @Res() res){
        return res.send(await this.awardsService.createAward(createAwardDto));
    }
}
