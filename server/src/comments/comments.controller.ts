import { Body, Controller, Delete, Patch, Post, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService,
    ) {}

    @Post()
    async createComment(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.createComment(createCommentDto);
    }

    @Patch()
    async updateComment(@Query('commentIdx') commentIdx: number, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentsService.updateComment(commentIdx, updateCommentDto);
    }

    @Delete()
    async deleteComment(@Query('commentIdx') commentIdx: number) {
        return this.commentsService.deleteComment(commentIdx);
    }
}
