import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class StarClubDto{
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
}