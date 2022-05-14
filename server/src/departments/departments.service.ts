import { Injectable } from '@nestjs/common';
import { CollegeService } from 'src/colleges/colleges.service';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CreateDepartmentsDto } from './dto/create-departments.dto';
import { DepartmentResDto } from './dto/department-response.dto';
import { UpdateDepartmentsDto } from './dto/update-departments.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
    constructor(
        private connection: Connection,
        private readonly collegeService: CollegeService,
    ){}

    async create(CreateDepartmentsDto: CreateDepartmentsDto){
        const {name, collegeIdx} = CreateDepartmentsDto;
        const queryrunner = this.connection.createQueryRunner();
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            const department = new Department();
            department.name = name;
            department.collegeIdx = collegeIdx;
            const college = await this.collegeService.findCollegeByIdx(collegeIdx);
            department.college = college;
            await queryrunner.manager.save(department);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryrunner.rollbackTransaction();
            return new BaseFailResDto('학과 생성에 실패했습니다');
        }finally{
            await queryrunner.release();
        }
    }

    async findAll(){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const departments = await queryRunner.manager.find(Department);
            return new DepartmentResDto(departments);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async findOne(departmentIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const department = await queryRunner.manager.findOne(Department, {
                where: {
                    departmentIdx: departmentIdx,
                }
            });
            return new DepartmentResDto(department);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }
    
    async update(departmentIdx: number, updateDepartmentsDto: UpdateDepartmentsDto){
        const { name, collegeIdx } = updateDepartmentsDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const department = await queryRunner.manager.findOne(Department, {
                where: {
                    departmentIdx: departmentIdx,
                }
            })
            department.name = name;
            department.collegeIdx = collegeIdx;
            const college = await this.collegeService.findCollegeByIdx(collegeIdx);
            department.college = college;
            await queryRunner.manager.save(department);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('학과 정보 변경에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }

    }

    async remove(departmentIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.delete(Department, departmentIdx);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('학과 정보 삭제에 실패했습니다');
        }finally{
            await queryRunner.release();
        }
    }
}
