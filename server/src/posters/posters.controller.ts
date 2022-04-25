import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { PostersService } from './posters.service';

@Controller('posters')
export class PostersController {
    constructor(
        private readonly postersService: PostersService,
    ){}

    @Post(':clubIdx')
    @UseInterceptors(FileInterceptor('file'))
    async createPoster(
        @Param('clubIdx') clubIdx: number, 
        @UploadedFile() file: Express.Multer.File,
        @Res() res){
            res.send(await this.postersService.createPoster(clubIdx, file));
    }
}
