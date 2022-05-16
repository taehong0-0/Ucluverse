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
        const queryRunner = this.connection.createQueryRunner();
        try {
            const postings = await queryRunner.manager.createQueryBuilder(Posting, 'posting')
            .select(['posting.postingIdx','posting.title'])
            .addSelect('clubBoard.name')
            .addSelect('user.name')
            .addSelect('images.path')
            .leftJoin('posting.user', 'user')
            .leftJoin('posting.clubBoard', 'clubBoard')
            .leftJoin('posting.images', 'images')
            .where('posting.clubBoardIdx = :clubBoardIdx', { clubBoardIdx })
            .getMany()
            const responses = [];
            postings.forEach(posting => {
                const response = {};
                const imageArr = [];
                response['posingIdx'] = posting.postingIdx;
                response['title'] = posting.title;
                response['author'] = posting.user.name;
                response['type'] = posting.clubBoard.name;
                if(posting.images !== undefined){
                    posting.images.forEach(image => {
                        imageArr.push(image.path);
                    })
                    response['path'] = imageArr[0];
                }else{
                    response['path'] = '';
                }
                responses.push(response);
            })
            return new PostingResDto(responses);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getEntirePostingsByClub(clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const postings = await queryRunner.manager.createQueryBuilder(Posting, 'posting')
            .select(['posting.postingIdx','posting.title'])
            .addSelect('clubBoard.name')
            .addSelect('user.name')
            .addSelect('images.path')
            .leftJoin('posting.user', 'user')
            .leftJoin('posting.clubBoard', 'clubBoard')
            .leftJoin('posting.images', 'images')
            .where('clubBoard.clubIdx = :clubIdx', { clubIdx })
            .getMany()
            const responses = [];
            postings.forEach(posting => {
                const response = {};
                const imageArr = [];
                response['posingIdx'] = posting.postingIdx;
                response['title'] = posting.title;
                response['author'] = posting.user.name;
                response['type'] = posting.clubBoard.name;
                if(posting.images !== undefined){
                    posting.images.forEach(image => {
                        imageArr.push(image.path);
                    })
                    response['path'] = imageArr[0];
                }else{
                    response['path'] = '';
                }
                responses.push(response);
            })
            return new PostingResDto(responses);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getAllPostings(boardName: string){
        const queryRunner = this.connection.createQueryRunner();
        try {
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
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getPostingByPostingIdx(postingIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const posting = await queryRunner.manager
                .createQueryBuilder(Posting, 'posting')
                .select(['posting.postingIdx','posting.title', 'posting.content','posting.createdAt','posting.allowComments','posting.isPublic'])
                .addSelect(['images.imageIdx', 'images.path'])
                .addSelect(['attachedFiles.attachedFileIdx','attachedFiles.path'])
                .addSelect(['comments.commentIdx','comments.userIdx','comments.content'])
                .addSelect(['likes.likeIdx','likes.userIdx'])
                .leftJoin('posting.attachedFiles' , 'attachedFiles')
                .leftJoin('posting.images' , 'images')
                .leftJoin('posting.comments', 'comments')
                .leftJoin('posting.likes', 'likes')
                .where('posting.postingIdx = :postingIdx', { postingIdx })
                .getOne();

                const response = {};
                const imageArr = [];
                const attachedFileArr = [];
                const likeArr = [];
                const commentArr = [];
                posting.images.forEach(image => {
                    const imageRes = {};
                    imageRes['imageIdx'] = image.imageIdx;
                    imageRes['imagePath'] = image.path;
                    imageArr.push(imageRes);
                });
                posting.attachedFiles.forEach(attachedFile => {
                    const attachedFileRes = {};
                    attachedFileRes['attachedFileIdx'] = attachedFile.attachedFileIdx;
                    attachedFileRes['attachedFilePath'] = attachedFile.path;
                    attachedFileArr.push(attachedFileRes);
                });
                posting.likes.forEach(like => {
                    const likeRes = {};
                    likeRes['likeIdx'] = like.likeIdx;
                    likeRes['userIdx'] = like.userIdx;
                    likeArr.push(likeRes);
                });
                posting.comments.forEach(comment => {
                    const commentRes = {};
                    commentRes['commentIdx'] = comment.commentIdx;
                    commentRes['userIdx'] = comment.userIdx;
                    commentRes['content'] = comment.content;
                    commentArr.push(commentRes);
                });
                response['postingIdx'] = posting.postingIdx;
                response['title'] = posting.title;
                response['content'] = posting.content;
                response['createdAt'] = posting.createdAt;
                response['allowComments'] = posting.allowComments;
                response['isPublic'] = posting.isPublic;
                response['images'] = imageArr;
                response['attachedFiles'] = attachedFileArr;
                response['likes'] = likeArr;
                response['comments'] = commentArr;
            return new PostingResDto(response);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
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
