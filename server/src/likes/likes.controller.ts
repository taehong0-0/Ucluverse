import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Controller('likes')
export class LikesController {
    constructor(
        private readonly likesService: LikesService,
    ){}

    @Post()
    async createLike(@Body() createLikeDto: CreateLikeDto) {
        return this.likesService.createLike(createLikeDto);
    }

    @Delete()
    async deleteLike(@Query('userIdx') userIdx: number, @Query('postingIdx') postingIdx: number) {
        const info = {
            userIdx: userIdx,
            postingIdx: postingIdx,
        }
        return this.likesService.deleteLike(info);
    }
}
