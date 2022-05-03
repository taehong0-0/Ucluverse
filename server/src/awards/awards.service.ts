import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseFailMsgResDto, BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { Award } from './entity/award.entity';
import { AwardsResDto } from './entity/awards-response.dto';
import { CreateAwardDto } from './entity/create-award.dto';
import { UpdateAwardDto } from './entity/update-award.dto';

@Injectable()
export class AwardsService {
    constructor(
        private connection: Connection,
    ){}

    async getAllAwards(){
        const queryrunner = this.connection.createQueryRunner();
        const awards = await queryrunner.manager.find(Award, {
            order: {
                awardIdx: 'desc'
            }
        });
        return new AwardsResDto(awards);
    }

    async getClubAwards(clubIdx: number){
        const queryrunner = this.connection.createQueryRunner();
        const awards = await queryrunner.manager.find(Award, {
            where: {
                clubIdx,
            }
        });
        return new AwardsResDto(awards);
    }

    async getAward(awardIdx: number){
        const queryrunner = this.connection.createQueryRunner();
        const award = await queryrunner.manager.findOne(Award, {
            where: {
                awardIdx,
            }
        });
        return new AwardsResDto(award);
    }

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

    async updateAward(updateAwardDto: UpdateAwardDto){
        const queryrunner = this.connection.createQueryRunner();
        const { awardIdx, clubIdx, competitionName, awardName, path } = updateAwardDto;
        const award = await queryrunner.manager.findOne(Award, {
            where: {
                awardIdx,
            }
        });
        const club = await queryrunner.manager.findOne(Club, {
            where: {
                clubIdx,
            }
        });
        award.club = club;
        award.competitionName = competitionName;
        award.awardName = awardName;
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
            return new BaseFailMsgResDto('수상정보 수정에 실패했습니다');
        }finally{
            await queryrunner.release()
        }
    }

    async deleteAward(awardIdx: number){
        const queryrunner = this.connection.createQueryRunner();
        const award = await queryrunner.manager.findOne(Award, {
            where: {
                awardIdx,
            }
        });
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.delete(Award,award);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
            return new BaseFailMsgResDto('수상정보 삭제에 실패했습니다');
        }finally{
            await queryrunner.release()
        }
    }
}
