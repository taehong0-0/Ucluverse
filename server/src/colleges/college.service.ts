import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';
import { College } from './entities/college.entity';

@Injectable()
export class CollegeService {
    constructor(
        private connection: Connection,
    ){}
    
    async create(CreateCollegeDto: CreateCollegeDto){
        const queryrunner = this.connection.createQueryRunner();
        const {name} = CreateCollegeDto;
        const college = new College();
        college.name = name;
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.save(college);
            await queryrunner.commitTransaction();
        }catch(e){
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release();
        }
    }

    async findAll():Promise<College[]>{
        const queryRunner = this.connection.createQueryRunner();
        const colleges = await queryRunner.manager.find(College);
        if(!colleges){
            return null;
        }
        return colleges;
    }

    async findByCollegeIdx(collegeIdx: number):Promise<College>{
        const queryRunner = this.connection.createQueryRunner();
        const college = await queryRunner.manager.findOne(College, {
            where: {
                collegeIdx: collegeIdx,
            }
        });
        if(!college){
            return null;
        }
        return college;
    }
    
    async update(collegeIdx: number, updateCollegeDto: UpdateCollegeDto){
        const queryRunner = this.connection.createQueryRunner();
        const { name } = updateCollegeDto;
        const college = await queryRunner.manager.findOne(College, {
            where: {
                collegeIdx: collegeIdx,
            }
        })
        college.name = name;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(college);
            await queryRunner.commitTransaction();
        }catch(e){
            await queryRunner.rollbackTransaction();
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
        }catch(e){
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }
}
