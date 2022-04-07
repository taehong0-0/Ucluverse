import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreatePostingDto } from './dto/create-posting.dto';
import { PostingsService } from './postings.service';

@Controller('postings')
export class PostingsController {
    constructor(
        private readonly postingsService: PostingsService,
    ){}
    
    @Post('clubBoard/:clubBoardIdx')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'images', },
        { name: 'attachedFiles', },
        // { name: 'videos', },
    ]))
    async createPosting(
        @Param('clubBoardIdx') clubBoardIdx: number,
        @Body() createPostingDto: CreatePostingDto,
        @UploadedFiles() files: {
            images? : Express.Multer.File[],
            attachedFiles? : Express.Multer.File[],
            // videos? : Express.Multer.File[],
        }
    ) {
        const response: any = await this.postingsService.createPosting(clubBoardIdx, createPostingDto);
        const postingIdx = response.res.postingIdx;
        if (files.images) {
            await this.postingsService.saveImagesOrAttachedFilesOrVideos(postingIdx, files.images);
        }
        if (files.attachedFiles) {
            await this.postingsService.saveImagesOrAttachedFilesOrVideos(postingIdx, files.attachedFiles);
        }
        // if (files.videos) {
        //     await this.postingsService.saveImagesOrAttachedFilesOrVideos(files.videos);
        // }
        return response;
    }

    @Get('clubBoard/:clubBoardIdx')
    async getPostingsByClubBoard(@Param('clubBoardIdx') clubBoardIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingsByClubBoard(clubBoardIdx));
    }
}
