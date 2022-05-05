import { Body, Controller, Delete, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
@ApiTags('댓글 API')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService,
    ) {}

    @Post()
    @ApiOperation({
        summary: '댓글 생성 API',
    })
    async createComment(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.createComment(createCommentDto);
    }

    @Patch()
    @ApiOperation({
        summary: '댓글 수정 API',
    })
    async updateComment(@Query('commentIdx') commentIdx: number, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentsService.updateComment(commentIdx, updateCommentDto);
    }

    @Delete()
    @ApiOperation({
        summary: '댓글 삭제 API',
    })
    async deleteComment(@Query('commentIdx') commentIdx: number) {
        return this.commentsService.deleteComment(commentIdx);
    }
}
