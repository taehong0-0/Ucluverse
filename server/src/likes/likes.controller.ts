import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('likes')
@ApiTags('좋아요 API')
export class LikesController {
    constructor(
        private readonly likesService: LikesService,
    ){}

    @Post()
    @ApiOperation({
        summary: '좋아요 생성 API',
    })
    async createLike(@Body() createLikeDto: CreateLikeDto) {
        return this.likesService.createLike(createLikeDto);
    }

    @Delete()
    @ApiOperation({
        summary: '좋아요 삭제 API',
    })
    async deleteLike(@Query('userIdx') userIdx: number, @Query('postingIdx') postingIdx: number) {
        const info = {
            userIdx: userIdx,
            postingIdx: postingIdx,
        }
        return this.likesService.deleteLike(info);
    }
}
