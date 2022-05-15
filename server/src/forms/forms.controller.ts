import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
    constructor(
        private readonly formsService: FormsService,
    ) {}

    @Post('')
    @ApiOperation({
        summary: '신청 폼 생성 API',
    })
    async createForm(@Body() createFormDto: CreateFormDto) {
        return this.formsService.createForm(createFormDto);
    }

    @Get('/:clubIdx')
    @ApiOperation({
        summary: '신청 폼 불러오기 API',
    })
    async getForm(@Param('clubIdx') clubIdx: number) {
        return this.formsService.getForm(clubIdx);
    }

    @Patch('')
    @ApiOperation({
        summary: '신청 폼 수정 API',
    })
    async updateForm(@Body() updateFormDto: UpdateFormDto) {
        return this.formsService.updateForm(updateFormDto);
    }

    @Delete('/:clubIdx')
    @ApiOperation({
        summary: '신청 폼 삭제 API',
    })
    async deleteForm(@Param('clubIdx') clubIdx: number) {
        return this.formsService.deleteForm(clubIdx);
    }
}
