import { Body, Controller, Delete, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostingDto } from './dto/create-posting.dto';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { PostingsService } from './postings.service';

@Controller('postings')
@ApiTags('게시물 API')
export class PostingsController {
    constructor(
        private readonly postingsService: PostingsService,
    ){}
    
    @Post('clubBoard/:clubBoardIdx')
    @ApiOperation({
        summary: '게시물 생성(작성) API',
    })
    async createPosting(
        @Param('clubBoardIdx') clubBoardIdx: number,
        @Body() createPostingDto: CreatePostingDto,
    ) {
        return await this.postingsService.createPosting(clubBoardIdx, createPostingDto);
    }

    @Get('clubBoard/:clubBoardIdx')
    async getPostingsByClubBoard(@Param('clubBoardIdx') clubBoardIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingsByClubBoard(clubBoardIdx));
    }

    @Get('entire/club/:clubIdx')         //동아리 페이지 전체 게시판의 게시물 불러오기
    async getEntirePostingsByClub(@Param('clubIdx') clubIdx: number, @Res() res){
        res.send(await this.postingsService.getEntirePostingsByClub(clubIdx));
    }
    
    @Get('main/:boardName')         //메인 페이지 게시판 게시물 불러오기
    async getAllActivityPostings(@Param('boardName') boardName: string, @Res() res){
        res.send(await this.postingsService.getAllPostings(boardName));
    }

    @Get(':postingIdx')         //postingIdx에 대한 게시글 정보 불러오기
    async getPostingByPostingIdx(@Param('postingIdx') postingIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingByPostingIdx(postingIdx));
    }

    @Post(':postingIdx')
    @ApiOperation({
        summary: '게시물 수정 API'
    })
    async updatePosting(
        @Param('postingIdx') postingIdx: number, 
        @Body() updatePostingDto: UpdatePostingDto,
    ) {
        return this.postingsService.updatePosting(postingIdx, updatePostingDto);
    }
    
    @Delete(':postingIdx')
    async deletePosting(@Param('postingIdx') postingIdx: number) {
        return this.postingsService.deletePosting(postingIdx);
    }
}
