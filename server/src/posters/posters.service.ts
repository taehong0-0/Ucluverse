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
        const queryrunner = this.connection.createQueryRunner();
        const posters = await queryrunner.manager.find(Poster, {
            relations:[
                'club'
            ]
        });
        return new PosterResDto(posters)
    }

    async getPoster(clubIdx: number){
        const queryrunner = this.connection.createQueryRunner();
        const poster = await queryrunner.manager.findOne(Poster, {
            where:{
                clubIdx,
            }
        });
        return new PosterResDto(poster)
    }

    async createPoster(createPosterDto: CreatePosterDto){
        const { clubIdx, path, content } = createPosterDto;
        const queryrunner = this.connection.createQueryRunner();
        const previous = await queryrunner.manager.findOne(Poster, {
            where:{
                clubIdx: clubIdx,
            }
        })
        if(previous){
            return (await this.updatePoster(previous, createPosterDto));
        }
        const poster = new Poster();
        queryrunner.connect();
        queryrunner.startTransaction();
        try{
            const club = await queryrunner.manager.findOne(Club, {
                where:{
                    clubIdx: clubIdx,
                }
            });
            poster.path = path;
            poster.club = club;
            poster.content = content;
            await queryrunner.manager.save(poster);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e)
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release();
        }
    }

    async updatePoster(poster: Poster, createPosterDto: CreatePosterDto){
        const {  path, content } = createPosterDto
        const queryrunner = this.connection.createQueryRunner();
        poster.path = path
        poster.content = content
        queryrunner.connect();
        queryrunner.startTransaction();
        try{
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
