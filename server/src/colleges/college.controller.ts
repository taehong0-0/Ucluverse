import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CollegeService } from './college.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';

@Controller('colleges')
export class CollegeController {
    constructor(
        private readonly collegeService: CollegeService,
    ){}

    @Post('')
    async createCollege(@Body() creteCollegeDto: CreateCollegeDto, @Res() res){
        return await this.collegeService.createCollege();
    }

    @Get('')
    async findAll(){
        return await this.collegeService.findAll();
    }

    @Get(':idx')
    async findOne(@Param('idx') collegeIdx: number){
        return await this.collegeService.findOne(collegeIdx);
    }

    @Patch(':idx')
    async update(
        @Param('idx') collegeIdx: number, 
        @Body() updateCollegeDto:UpdateCollegeDto,
        @Res() res
        ){
        return await this.collegeService.update(collegeIdx, updateCollegeDto);
    }

    @Delete(':idx')
    async remove(
        @Param('idx') collegeIdx: number,
        @Res() res,
    ){
        return await this.collegeService.remove(collegeIdx);
    }
}
