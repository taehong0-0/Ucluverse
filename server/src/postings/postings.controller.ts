
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostingDto } from './dto/create-posting.dto';
import { PostingCountResDto } from './dto/postings-response.dto';
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
    @ApiOperation({
        summary: '동아리 게시판 인덱스에 대한 게시물 리스트 불러오기 API',
    })
    async getPostingsByClubBoard(@Param('clubBoardIdx') clubBoardIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingsByClubBoard(clubBoardIdx));
    }

    @Get('club/entire/:clubIdx')
    @ApiOperation({
        summary: '동아리 페이지 전체 게시물 리스트 불러오기 API',
    })         
    async getEntirePostingsByClub(@Param('clubIdx') clubIdx: number, @Res() res){
        res.send(await this.postingsService.getEntirePostingsByClub(clubIdx));
    }
    
    @Get('main')
    @ApiOperation({
        summary: '메인 페이지 게시판 이름에 대한 게시물 리스트 불러오기 API',
    })         
    async getAllPostings(@Query('boardName') boardName: string, @Res() res){
        res.send(await this.postingsService.getAllPostings(boardName));
    }

    @Get(':postingIdx/:userIdx')
    @ApiOperation({
        summary: 'postingIdx에 대한 게시글 정보 불러오기 API',
    })         
    async getPostingByPostingIdx(@Param('postingIdx') postingIdx: number, @Param('postingIdx') userIdx: number, @Res() res){
        res.send(await this.postingsService.getPostingByPostingIdx(postingIdx, userIdx));
    }

    @Put(':postingIdx')
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
    @ApiOperation({
        summary: '게시물 삭제 API'
    })
    async deletePosting(@Param('postingIdx') postingIdx: number) {
        return this.postingsService.deletePosting(postingIdx);
    }

    @Get('clubBoard/:clubBoardIdx/count')
    @ApiOperation({
        summary: '동아리 게시판의 게시물 총 개수 반환 API',
    })
    @ApiOkResponse({
        type: PostingCountResDto,
    })
    async getCountOfClubBoard(@Param('clubBoardIdx') clubBoardIdx: number) {
        return this.postingsService.getCountOfClubBoard(clubBoardIdx);
    }
}
