import { Injectable } from '@nestjs/common';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormsService {
    constructor(
        private connection: Connection
    ) {}
    
    async createForm(createFormDto: CreateFormDto) {
        
    }

    async updateForm(updateFormDto: UpdateFormDto) {

    }

    async deleteForm(clubIdx: number) {

    }
}
