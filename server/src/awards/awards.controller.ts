import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Controller('awards')
@ApiTags('수상 내역 API')
export class AwardsController {
    constructor(
        private readonly awardsService: AwardsService,
    ){}

    @Get('all')
    @ApiOperation({
        summary: '전체 동아리의 모든 수상내역 불러오기 API',
    })
    async getAllAwards(@Res() res){
        return res.send(await this.awardsService.getAllAwards());
    }

    @Get('club/:clubIdx')
    @ApiOperation({
        summary: '동아리의 모든 수상 내역 불러오기 API',
    })
    async getClubAwards(@Param('clubIdx') clubIdx: number, @Res() res){
        return res.send(await this.awardsService.getClubAwards(clubIdx));
    }

    @Get(':awardIdx')
    @ApiOperation({
        summary: '수상 내역 인덱스에 대한 수상 내역 정보 불러오기 API',
    })
    async getAward(@Param('awardIdx') awardIdx: number, @Res() res){
        return res.send(await this.awardsService.getAward(awardIdx));
    }

    @Post('')
    @ApiOperation({
        summary: '수상 내역 생성 API',
    })
    async createAward(@Body() createAwardDto: CreateAwardDto, @Res() res){
        return res.send(await this.awardsService.createAward(createAwardDto));
    }

    @Patch('')
    @ApiOperation({
        summary: '수상 내역 수정 API',
    })
    async updateAward(@Body() updateAwardDto: UpdateAwardDto, @Res() res){
        return res.send(await this.awardsService.updateAward(updateAwardDto));
    }

    @Delete(':awardIdx')
    @ApiOperation({
        summary: '수상 내역 삭제 API',
    })
    async deleteAward(@Param('awardIdx') awardIdx: number, @Res() res){
        return res.send(await this.awardsService.deleteAward(awardIdx));
    }
}
