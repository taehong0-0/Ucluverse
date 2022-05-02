import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { CreatePosterDto } from './dto/create-poster.dto';
import { PostersService } from './posters.service';

@Controller('posters')
export class PostersController {
    constructor(
        private readonly postersService: PostersService,
    ){}

    @Post('')
    async createPoster(@Body() createPosterDto: CreatePosterDto, @Res() res){
            res.send(await this.postersService.createPoster(createPosterDto));
    }

    @Get('all')
    async getAllPosters(@Res() res){
        res.send(await this.postersService.getAllPosters());
    }

    @Get('club/:clubIdx')
    async getPoster(@Param('clubIdx') clubIdx: number, @Res() res){
        res.send(await this.postersService.getPoster(clubIdx));
    }
}
