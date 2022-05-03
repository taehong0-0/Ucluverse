import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './entity/create-award.dto';
import { UpdateAwardDto } from './entity/update-award.dto';

@Controller('awards')
export class AwardsController {
    constructor(
        private readonly awardsService: AwardsService,
    ){}

    @Get('all')
    async getAllAwards(@Res() res){
        return res.send(await this.awardsService.getAllAwards());
    }

    @Get('club/:clubIdx')
    async getClubAwards(@Param('clubIdx') clubIdx: number, @Res() res){
        return res.send(await this.awardsService.getClubAwards(clubIdx));
    }

    @Get(':awardIdx')
    async getAward(@Param('awardIdx') awardIdx: number, @Res() res){
        return res.send(await this.awardsService.getAward(awardIdx));
    }

    @Post('')
    async createAward(@Body() createAwardDto: CreateAwardDto, @Res() res){
        return res.send(await this.awardsService.createAward(createAwardDto));
    }

    @Patch('')
    async updateAward(@Body() updateAwardDto: UpdateAwardDto, @Res() res){
        return res.send(await this.awardsService.updateAward(updateAwardDto));
    }

    @Delete(':awardIdx')
    async deleteAward(@Param('awardIdx') awardIdx: number, @Res() res){
        return res.send(await this.awardsService.deleteAward(awardIdx));
    }
}
