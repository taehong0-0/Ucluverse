import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CollegeService } from './colleges.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';

@Controller('college')
@ApiTags('단과대 API')
export class CollegeController {
    constructor(
        private readonly collegeService: CollegeService,
    ){}

    @Post('')
    @ApiOperation({
        summary: '단과대 생성 API',
    })
    async create(@Body() createCollegeDto: CreateCollegeDto, @Res() res){
        res.send(await this.collegeService.create(createCollegeDto));
    }

    @Get('')
    @ApiOperation({
        summary: '모든 단과대 불러오기 API',
    })
    async findAll(@Res() res){
        res.send(await this.collegeService.findAll());
    }

    @Get(':idx')
    @ApiOperation({
        summary: '단과대 인덱스에 대한 단과대 정보 불러오기 API',
    })
    async findOne(@Param('idx') collegeIdx: number, @Res() res){
        res.send(await this.collegeService.findOne(collegeIdx));
    }

    @Patch(':idx')
    @ApiOperation({
        summary: '단과대 인덱스에 대한 단과대 정보 수정 API',
    })
    async update(
        @Param('idx') collegeIdx: number, 
        @Body() updateCollegeDto:UpdateCollegeDto,
        @Res() res
        ){

        res.send(await this.collegeService.update(collegeIdx, updateCollegeDto));
    }

    @Delete(':idx')
    @ApiOperation({
        summary: '단과대 인덱스에 대한 단과대 삭제 API',
    })
    async remove(
        @Param('idx') collegeIdx: number,
        @Res() res,
    ){

        res.send(await this.collegeService.remove(collegeIdx));
    }
}
