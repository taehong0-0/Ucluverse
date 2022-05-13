import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class UpdateCollegeDto{
    @ApiProperty({ description: '단과대 이름' })
    @IsString()
    name: string
}