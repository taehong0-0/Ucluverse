import { Injectable } from '@nestjs/common';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { Like } from './entity/likes.entity';

@Injectable()
export class LikesService {
    constructor(
        private readonly connection: Connection,
    ){}
    async createLike(createLikeDto: CreateLikeDto) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const like = new Like();
            like.userIdx = createLikeDto.userIdx;
            like.postingIdx = createLikeDto.postingIdx;

            await queryRunner.manager.save(like);
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();

        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('좋아요 생성에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async deleteLike(info: any) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.delete(Like, {
                userIdx: info.userIdx,
                postingIdx: info.postingIdx,
            });
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('좋아요 취소에 실패하였습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
