import { Injectable } from '@nestjs/common';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CollegeResDto } from './dto/college-response.dto';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';
import { College } from './entities/college.entity';

@Injectable()
export class CollegeService {
    constructor(
        private connection: Connection,
    ){}
    
    async create(CreateCollegeDto: CreateCollegeDto){
        const {name} = CreateCollegeDto;
        const queryrunner = this.connection.createQueryRunner();
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            const college = new College();
            college.name = name;
            await queryrunner.manager.save(college);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryrunner.rollbackTransaction();
            return new BaseFailResDto('단과대 생성에 실패했습니다');
        }finally{
            await queryrunner.release();
        }
    }

    async findAll(){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const colleges = await queryRunner.manager.find(College);
            return new CollegeResDto(colleges);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(collegeIdx: number){
        const college = await this.findCollegeByIdx(collegeIdx);
        return new CollegeResDto(college);
    }

    async findCollegeByIdx(collegeIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try{
            const college = await queryRunner.manager.findOne(College, {
                where: {
                    collegeIdx: collegeIdx,
                }
            });
            return college;
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }
    
    async update(collegeIdx: number, updateCollegeDto: UpdateCollegeDto){
        const { name } = updateCollegeDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const college = await queryRunner.manager.findOne(College, {
                where: {
                    collegeIdx: collegeIdx,
                }
            })
            college.name = name;
            await queryRunner.manager.save(college);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('단과대 정보 변경에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }

    }

    async remove(collegeIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.delete(College, collegeIdx);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('단과대 정보 삭제에 실패했습니다');
        }finally{
            await queryRunner.release();
        }
    }
}
