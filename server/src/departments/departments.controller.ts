import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentsDto } from './dto/create-departments.dto';
import { UpdateDepartmentsDto } from './dto/update-departments.dto';

@Controller('departments')
export class DepartmentsController {
    constructor(
        private readonly departmentsService: DepartmentsService,
    ){}

    @Post('')
    async create(@Body() createDepartmentsDto: CreateDepartmentsDto, @Res() res){
        res.send(await this.departmentsService.create(createDepartmentsDto));
    }

    @Get('')
    async findAll(@Res() res){
        res.send(await this.departmentsService.findAll());
    }

    @Get(':idx')
    async findOne(@Param('idx') departmentIdx: number, @Res() res){
        res.send(await this.departmentsService.findOne(departmentIdx));
    }

    @Patch(':idx')
    async update(
        @Param('idx') departmentIdx: number, 
        @Body() updateDepartmentsDto:UpdateDepartmentsDto,
        @Res() res
        ){
        res.send(await this.departmentsService.update(departmentIdx, updateDepartmentsDto));
    }

    @Delete(':idx')
    async remove(
        @Param('idx') departmentIdx: number,
        @Res() res,
    ){
        res.send(await this.departmentsService.remove(departmentIdx));
    }
}
