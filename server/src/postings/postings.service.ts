import { Injectable } from '@nestjs/common';
import { ClubBoard } from 'src/clubs/entities/club.entity';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { User } from 'src/user/entities/user.entity';
import { Connection } from 'typeorm';
import { CreatePostingDto } from './dto/create-posting.dto';
import { CreatePostingResDto, PostingResDto } from './dto/postings-response.dto';
import { AttachedFile, Image, Posting } from './entities/posting.entity';

@Injectable()
export class PostingsService {
    constructor(
        private connection: Connection,
    ){}
    
    async createPosting(clubBoardIdx: number, createPostingDto: CreatePostingDto) {
        const queryRunner = this.connection.createQueryRunner();
        const { userIdx, title, content } = createPostingDto;
        const posting = new Posting();
        posting.title = title;
        posting.content = content;

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await queryRunner.manager.findOne(User, {
                where: {
                    userIdx: userIdx,
                }
            });
            const clubBoard = await queryRunner.manager.findOne(ClubBoard, {
                where: {
                    clubBoardIdx: clubBoardIdx,
                }
            });
            posting.user = user;
            posting.clubBoard = clubBoard;
            await queryRunner.manager.save(posting);
            await queryRunner.commitTransaction();
            return new CreatePostingResDto(posting.postingIdx);
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('게시글 생성에 실패하였습니다');
        } finally {
            await queryRunner.release();
        }
    }

    async saveImagesOrAttachedFilesOrVideos(postingIdx: number, files: Array<any>) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const insertPathOfImagesOrAttachedFilesOrVideos = files.map(async (file) => {
                if (file.fieldname === 'images') {
                    const image = new Image();
                    image.path = file.key;
                    image.postingIdx = postingIdx;
                    await queryRunner.manager.save(image);
                } else if (file.fieldname === 'attachedFiles') {
                    const attachedFile = new AttachedFile();
                    attachedFile.path = file.key;
                    attachedFile.postingIdx = postingIdx;
                    await queryRunner.manager.save(attachedFile);
                }
            });
            await Promise.all(insertPathOfImagesOrAttachedFilesOrVideos);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('경로를 데이터베이스에 저장하는 것에 실패하였습니다');
        } finally {
            await queryRunner.release();
        }
    }


    async getPostingsByClubBoard(clubBoardIdx : number){
        const queryrunner = this.connection.createQueryRunner();
        const postings = await queryrunner.manager.find(Posting, {
            where: {
                clubBoardIdx: clubBoardIdx,
            },
            order: {
                postingIdx: "ASC",
            }
        });
        return new PostingResDto(postings);
    }
}
