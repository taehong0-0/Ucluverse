import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { Poster } from './entities/poster.entity';
import * as AWS from 'aws-sdk'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostersService {
    constructor(
        private connection: Connection,
        private readonly configService: ConfigService,
    ){}
    
    async createPoster(clubIdx: number, file: any){
        await this.removePoster(clubIdx);
        const queryrunner = this.connection.createQueryRunner();
        const poster = new Poster();
        queryrunner.connect();
        queryrunner.startTransaction();
        try{
            const club = await queryrunner.manager.findOne(Club, {
                where:{
                    clubIdx: clubIdx,
                }
            });
            poster.path = file.key;
            poster.club = club;
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

    async removePoster(clubIdx:number){
        const queryrunner = this.connection.createQueryRunner();
        queryrunner.connect();
        queryrunner.startTransaction();
        try{
            const poster = await queryrunner.manager.findOne(Poster, {
                where:{
                    clubIdx: clubIdx,
                }
            })
            const imageURI = poster.path;
            const s3 = new AWS.S3();
            s3.deleteObject({
                Bucket: this.configService.get('AWS_S3_BUCKET_NAME'), // 사용자 버켓 이름
                Key: imageURI, // 버켓 내 경로
              }, (err) => {
                if (err) { throw err; }
              })
            await queryrunner.manager.delete(Poster, poster);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release();
        }
    }
}
