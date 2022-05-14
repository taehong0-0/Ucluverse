import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { Poster } from './entities/poster.entity';
import * as AWS from 'aws-sdk'
import { ConfigService } from '@nestjs/config';
import { CreatePosterDto } from './dto/create-poster.dto';
import { PosterResDto } from './dto/posters-response.dto';

@Injectable()
export class PostersService {
    constructor(
        private connection: Connection,
        private readonly configService: ConfigService,
    ){}
    
    async getAllPosters(){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const posters = await queryRunner.manager.find(Poster, {
                relations:[
                    'club'
                ]
            });
            return new PosterResDto(posters)
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getPoster(clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const poster = await queryRunner.manager.findOne(Poster, {
                where:{
                    clubIdx,
                }
            });
            return new PosterResDto(poster)
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async createPoster(createPosterDto: CreatePosterDto){
        const { clubIdx, path, content } = createPosterDto;
        const queryRunner = this.connection.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction();
        try{
            const previous = await queryRunner.manager.findOne(Poster, {
                where:{
                    clubIdx: clubIdx,
                }
            })
            if(previous){
                return (await this.updatePoster(previous, createPosterDto));
            }
            const poster = new Poster();
            const club = await queryRunner.manager.findOne(Club, {
                where:{
                    clubIdx: clubIdx,
                }
            });
            poster.path = path;
            poster.club = club;
            poster.content = content;
            await queryRunner.manager.save(poster);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e)
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async updatePoster(poster: Poster, createPosterDto: CreatePosterDto){
        const {  path, content } = createPosterDto;
        const queryrunner = this.connection.createQueryRunner();
        queryrunner.connect();
        queryrunner.startTransaction();
        try{
            poster.path = path
            poster.content = content
            await queryrunner.manager.save(poster);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release();
        }
    }
}
