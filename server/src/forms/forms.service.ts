import { Injectable } from '@nestjs/common';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { FormResDto } from './dto/response-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form, Question } from './entity/form.entity';

@Injectable()
export class FormsService {
    constructor(
        private connection: Connection
    ) {}
    
    async createForm(createFormDto: CreateFormDto) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.startTransaction();
        try {
            const { clubIdx, notice, questions } = createFormDto;
            const form = new Form(clubIdx, notice);
            form.questions = [];
            questions.forEach(question => {
                const newQuestion: Question = new Question(form, question);
                form.questions.push(newQuestion);
            })
            await queryRunner.manager.save(form);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('신청 양식을 생성하는 데 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async getForm(clubIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        try {
            const form = await queryRunner.manager.createQueryBuilder(Form, 'form')
                .select('form')
                .addSelect('questions')
                .leftJoin('form.questions', 'questions')
                .where('form.clubIdx = :clubIdx', { clubIdx })
                .getOneOrFail();
            return new FormResDto(form);
        } catch(e) {
            console.log(e);
            return new BaseFailResDto('신청 양식을 찾을 수 없습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async updateForm(updateFormDto: UpdateFormDto) {

    }

    async deleteForm(clubIdx: number) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.startTransaction();
        try {
            const exForm = await queryRunner.manager.findOneByOrFail(Form, {
                clubIdx: clubIdx,
            });
            await queryRunner.manager.delete(Form, {
                clubIdx: clubIdx,
            });
            
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('신청 양식을 삭제하는 데 실패했습니다');
        } finally {
            await queryRunner.release();
        }
    }
}
