import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseFailMsgResDto, BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { Award } from './entity/award.entity';
import { AwardsResDto } from './entity/awards-response.dto';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';

@Injectable()
export class AwardsService {
    constructor(
        private connection: Connection,
    ){}

    async getAllAwards(){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const awards = await queryRunner.manager.createQueryBuilder(Award, 'award')
            .select(['award.awardIdx','award.competitionName','award.awardName','award.content','award.path','award.clubIdx', 'award.createdAt', 'award.updatedAt'])
            .addSelect('club.name')
            .leftJoin('award.club', 'club')
            .orderBy('award.createdAt', 'DESC')
            .getMany()
            const responses = [];
            awards.forEach(award => {
                const response = {};
                response['awardIdx'] = award.awardIdx;
                response['clubIdx'] = award.clubIdx;
                response['clubName'] = award.club.name;
                response['awardTitle'] = award.competitionName;
                response['awardName'] = award.awardName;
                response['awardContent'] = award.content;
                response['path'] = award.path;
                responses.push(response);
            })
            return new AwardsResDto(responses);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getClubAwards(clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
                const awards = await queryRunner.manager.createQueryBuilder(Award, 'award')
                .select(['award.awardIdx','award.competitionName','award.awardName','award.content','award.path','award.clubIdx', 'award.createdAt', 'award.updatedAt'])
                .addSelect('club.name')
                .leftJoin('award.club', 'club')
                .where('club.clubIdx = :clubIdx', { clubIdx })
                .orderBy('award.createdAt', 'DESC')
                .getMany()
                const responses = [];
                awards.forEach(award => {
                    const response = {};
                    response['awardIdx'] = award.awardIdx;
                    response['clubIdx'] = award.clubIdx;
                    response['clubName'] = award.club.name;
                    response['awardTitle'] = award.competitionName;
                    response['awardName'] = award.awardName;
                    response['awardContent'] = award.content;
                    response['path'] = award.path;
                    responses.push(response);
                });
            return new AwardsResDto(responses);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getAward(awardIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const award = await queryRunner.manager.createQueryBuilder(Award, 'award')
                .select(['award.awardIdx','award.competitionName','award.awardName','award.content','award.path','award.clubIdx'])
                .addSelect('club.name')
                .leftJoin('award.club', 'club')
                .where('award.awardIdx = :awardIdx', { awardIdx })
                .getOne()

                const response = {};
                response['awardIdx'] = award.awardIdx;
                response['clubIdx'] = award.clubIdx;
                response['clubName'] = award.club.name;
                response['awardTitle'] = award.competitionName;
                response['awardName'] = award.awardName;
                response['awardContent'] = award.content;
                response['path'] = award.path;

            return new AwardsResDto(response);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async createAward(createAwardDto: CreateAwardDto){
        const { clubIdx, competitionName, awardName, content, path } = createAwardDto;
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const award = new Award();
            const club = await queryRunner.manager.findOne(Club, {
                where: {
                    clubIdx,
                }
            });
            award.club = club;
            award.competitionName = competitionName;
            award.awardName = awardName;
            award.content = content;
            award.path = path;
            await queryRunner.manager.save(award);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release()
        }
    }

    async updateAward(updateAwardDto: UpdateAwardDto){
        const queryRunner = this.connection.createQueryRunner();
        const { awardIdx, clubIdx, competitionName, awardName, path } = updateAwardDto;
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const award = await queryRunner.manager.findOne(Award, {
                where: {
                    awardIdx,
                }
            });
            const club = await queryRunner.manager.findOne(Club, {
                where: {
                    clubIdx,
                }
            });
            award.club = club;
            award.competitionName = competitionName;
            award.awardName = awardName;
            award.path = path;

            await queryRunner.manager.save(award);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailMsgResDto('수상정보 수정에 실패했습니다');
        } finally {
            await queryRunner.release();
        }
    }

    async deleteAward(awardIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const award = await queryRunner.manager.findOne(Award, {
                where: {
                    awardIdx,
                }
            });
            await queryRunner.manager.delete(Award,award);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailMsgResDto('수상정보 삭제에 실패했습니다');
        } finally {
            await queryRunner.release()
        }
    }
}
