import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { Award } from './entity/award.entity';
import { CreateAwardDto } from './entity/create-award.dto';

@Injectable()
export class AwardsService {
    constructor(
        private connection: Connection,
    ){}

    async createAward(createAwardDto: CreateAwardDto){
        const { clubIdx, competitionName, awardName, content, path } = createAwardDto;
        const queryrunner = this.connection.createQueryRunner();
        const award = new Award()
        const club = await queryrunner.manager.findOne(Club, {
            where: {
                clubIdx,
            }
        });
        award.club = club;
        award.competitionName = competitionName;
        award.awardName = awardName;
        award.content = content;
        award.path = path;
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.save(award);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release()
        }
    }
}
