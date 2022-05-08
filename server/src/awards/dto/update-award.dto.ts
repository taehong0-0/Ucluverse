import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UpdateAwardDto{
    @ApiProperty({ description: '수상 인덱스' })
    @IsNumber()
    awardIdx: number
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number
    @ApiProperty({ description: '대회 이름' })
    @IsString()
    competitionName: string;
    @ApiProperty({ description: '상 이름' })
    @IsString()
    awardName: string;
    @ApiProperty({ description: '내용' })
    @IsString()
    content: string;
    @ApiProperty({ description: '사진 경로' })
    @IsString()
    path: string;
}