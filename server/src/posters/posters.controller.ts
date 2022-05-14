import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePosterDto } from './dto/create-poster.dto';
import { PostersService } from './posters.service';

@Controller('posters')
@ApiTags('포스터 API')
export class PostersController {
    constructor(
        private readonly postersService: PostersService,
    ){}

    @Post('')
    @ApiOperation({
        summary: '포스터 생성 API'
    })
    async createPoster(@Body() createPosterDto: CreatePosterDto, @Res() res){
            res.send(await this.postersService.createPoster(createPosterDto));
    }

    @Get('all')
    @ApiOperation({
        summary: '전체 포스터 불러오기 API'
    })
    async getAllPosters(@Res() res){
        res.send(await this.postersService.getAllPosters());
    }

    @Get('club/:clubIdx')
    @ApiOperation({
        summary: '동아리 인덱스에 대한 포스터 불러오기 API'
    })
    async getPoster(@Param('clubIdx') clubIdx: number, @Res() res){
        res.send(await this.postersService.getPoster(clubIdx));
    }
}
