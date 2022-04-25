import { Injectable } from '@nestjs/common';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentsService {
    constructor(
        private readonly connection: Connection,
    ) {}

    async createComment(createCommentDto: CreateCommentDto) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const comment = new Comment();
            comment.userIdx = createCommentDto.userIdx;
            comment.postingIdx = createCommentDto.postingIdx;
            comment.content = createCommentDto.content;

            await queryRunner.manager.save(comment);
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            return new BaseFailResDto('댓글 작성에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateComment(commentIdx: number, updateCommentDto: UpdateCommentDto) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(Comment, commentIdx, updateCommentDto);
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            return new BaseFailResDto('댓글 수정에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async deleteComment(commentIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.delete(Comment, commentIdx);
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            return new BaseFailResDto('댓글 삭제에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
