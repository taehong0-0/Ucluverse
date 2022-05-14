import { Injectable } from '@nestjs/common';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
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
            await queryRunner.manager.save(form);
            const insertQuestions = questions.map(async (question) => {
               await queryRunner.manager.save(new Question(form, question));
            });
            await Promise.all(insertQuestions);
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

    }

    async updateForm(updateFormDto: UpdateFormDto) {

    }

    async deleteForm(clubIdx: number) {

    }
}
