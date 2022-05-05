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
        const { userIdx, title, content, images, allowComments, isPublic } = createPostingDto;
        const posting = new Posting();
        posting.title = title;
        posting.content = content;
        posting.allowComments = allowComments;
        posting.isPublic = isPublic;

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
            const newImages = images.map((path) => {
                const image = new Image();
                image.path = path;
                return image;
            });
            posting.images = newImages;
            await queryRunner.manager.save(posting);

            await queryRunner.commitTransaction();
            return new CreatePostingResDto(posting.postingIdx);
        } catch(error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('게시물 생성에 실패하였습니다');
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
                'comments',
                'likes',
            ]
        });
        return new PostingResDto(posting);
    }
    
    async updatePosting(postingIdx: number, updatePostingDto: UpdatePostingDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { images, ...updateInfo } = updatePostingDto;
            // 기존의 이미지를 전부 찾아오고,
            const exImages = await queryRunner.manager.find(Image, {
                where: {
                    postingIdx: postingIdx,
                },
                select: ['path']
            });
            const pathsOfExImages = exImages.map(exImages => exImages.path);
            console.log(pathsOfExImages);
            // 기존 이미지 - Dto 이미지 => 삭제
            const pathsOfExImagesToBeDeleted = pathsOfExImages.filter(exImage => !images.includes(exImage));
            // console.log(pathsOfExImagesToBeDeleted);
            for (let path of pathsOfExImagesToBeDeleted) {
                await queryRunner.manager.delete(Image, {
                    path: path
                });
            }
            // Dto 이미지 - 기존 이미지 => 추가
            const pathsOfNewImagesToBeSaved = images.filter(image => !pathsOfExImages.includes(image));
            // console.log(pathsOfNewImagesToBeSaved);
            for (let path of pathsOfNewImagesToBeSaved) {
                const newImage = new Image();
                newImage.path = path;
                newImage.postingIdx = postingIdx;
                await queryRunner.manager.save(newImage);
            }
            if (Object.keys(updateInfo).length >= 1) {
                await queryRunner.manager.update(Posting, postingIdx, updateInfo);
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
