import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentsDto } from './dto/create-departments.dto';
import { UpdateDepartmentsDto } from './dto/update-departments.dto';

@Controller('departments')
@ApiTags('학과 API')
export class DepartmentsController {
    constructor(
        private readonly departmentsService: DepartmentsService,
    ){}

    @Post('')
    @ApiOperation({
        summary: '학과 생성 API',
    })
    async create(@Body() createDepartmentsDto: CreateDepartmentsDto, @Res() res){
        res.send(await this.departmentsService.create(createDepartmentsDto));
    }

    @Get('')
    @ApiOperation({
        summary: '모든 학과 불러오기 API',
    })
    async findAll(@Res() res){
        res.send(await this.departmentsService.findAll());
    }

    @Get(':idx')
    @ApiOperation({
        summary: '학과 인덱스에 대한 학과 정보 불러오기 API',
    })
    async findOne(@Param('idx') departmentIdx: number, @Res() res){
        res.send(await this.departmentsService.findOne(departmentIdx));
    }

    @Patch(':idx')
    @ApiOperation({
        summary: '학과 정보 수정 API',
    })
    async update(
        @Param('idx') departmentIdx: number, 
        @Body() updateDepartmentsDto:UpdateDepartmentsDto,
        @Res() res
        ){
        res.send(await this.departmentsService.update(departmentIdx, updateDepartmentsDto));
    }

    @Delete(':idx')
    @ApiOperation({
        summary: '학과 정보 삭제 API',
    })
    async remove(
        @Param('idx') departmentIdx: number,
        @Res() res,
    ){
        res.send(await this.departmentsService.remove(departmentIdx));
    }
}

