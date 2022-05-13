import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator"

export class CreateDepartmentsDto{
    @ApiProperty({ description: '학과 이름' })
    @IsString()
    name: string
    @ApiProperty({ description: '단과대 인덱스' })
    @IsNumber()
    collegeIdx: number;
}