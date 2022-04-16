import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { ClubBoard } from 'src/clubs/entities/club.entity';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { User } from 'src/user/entities/user.entity';
import { Connection, In } from 'typeorm';
import { CreatePostingDto } from './dto/create-posting.dto';
import { CreatePostingResDto, PostingResDto } from './dto/postings-response.dto';
import { UpdatePostingDto } from './dto/update-posting.dto';
import { AttachedFile, Image, Posting } from './entities/posting.entity';

@Injectable()
export class PostingsService {
    constructor(
        private connection: Connection,
        private readonly configService: ConfigService,
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
            relations:[
                'clubBoard',
                'images',
                'videos',
                'attachedFiles',
                'comments',
                'likes',
            ],
            order: {
                postingIdx: "ASC",
            }
        });
        return new PostingResDto(postings);
    }

    async getEntirePostingsByClub(clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const postings = await queryRunner.manager.find(Posting, {
            relations:[
                'clubBoard',
                'images',
                'videos',
                'attachedFiles',
                'comments',
                'likes',
            ],
            where:{
                clubBoard: { clubIdx: clubIdx },

            },
        })
        return new PostingResDto(postings);
    }

    async getAllPostings(boardName: string){
        const queryRunner = this.connection.createQueryRunner();
        const postings = await queryRunner.manager.find(Posting, {
            relations:[
                'clubBoard',
                'images',
                'videos',
                'attachedFiles',
                'comments',
                'likes',
            ],
            where:{
                clubBoard: { name: boardName },
            },
        })
        return new PostingResDto(postings);
    }

    async getPostingByPostingIdx(postingIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const posting = await queryRunner.manager.findOne(Posting, {
            where:{
                postingIdx: postingIdx,
            },
            relations:[
                'clubBoard',
                'images',
                'videos',
                'attachedFiles',
                'comments',
                'likes',
            ]
        });
        return new PostingResDto(posting);
    }
    
    async updatePosting(postingIdx: number, updatePostingDto: UpdatePostingDto) {
        const queryRunner = this.connection.createQueryRunner();
        const s3 = new S3();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { 
                deletedImages, 
                deletedAttachedFiles, 
                ...titleAndContent } = updatePostingDto;
            await queryRunner.manager.update(Posting, postingIdx, titleAndContent);
            if (deletedImages.length > 0) {
                const selectedDeletedImages = await queryRunner.manager.createQueryBuilder(Image, 'image')
                .select('image.path')
                .where('image.imageIdx In(:deletedImages)', { deletedImages: JSON.parse(deletedImages) })
                .getMany();
                
                selectedDeletedImages.forEach((image) => {
                    s3.deleteObject({
                        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
                        Key: image.path,
                    }, (err) => {
                        if(err) { throw err; }
                    });
                });

                await queryRunner.manager.createQueryBuilder()
                    .delete()
                    .from(Image)
                    .where('imageIdx In(:deletedImages)', {
                        deletedImages: JSON.parse(deletedImages),
                    })
                    .execute();
            }
            if (deletedAttachedFiles.length > 0) {
                const selectedDeletedAttachedFiles = await queryRunner.manager.createQueryBuilder(AttachedFile, 'attachedFile')
                .select('attachedFile.path')
                .where('attachedFile.attachedFileIdx In(:deletedAttachedFiles)', { deletedAttachedFiles: JSON.parse(deletedAttachedFiles) })
                .getMany();
                selectedDeletedAttachedFiles.forEach((attachedFile) => {
                    s3.deleteObject({
                        Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
                        Key: attachedFile.path,
                    }, (err) => {
                        if(err) { throw err; }
                    });
                });

                await queryRunner.manager.createQueryBuilder()
                    .delete()
                    .from(AttachedFile)
                    .where('attachedFileIdx In(:deletedAttachedFiles)', {
                        deletedAttachedFiles: JSON.parse(deletedAttachedFiles),
                    })
                    .execute();
            }
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('게시물 수정에 실패했습니다');
        } finally {
            await queryRunner.release();
        }
    }

    async deletePosting(postingIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const exPosting = await queryRunner.manager.findOne(Posting, {
                where: {
                    postingIdx: postingIdx,
                }
            });
            if(!exPosting) {
                return new BaseFailResDto('해당 게시물이 존재하지 않습니다.');
            } else {
                await queryRunner.manager.delete(Posting, postingIdx);
                await queryRunner.commitTransaction();

                return new BaseSuccessResDto();
            } 
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('게시물 삭제에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }
}
