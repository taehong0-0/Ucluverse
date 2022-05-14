import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator"

export class CreateAnswerDto {
    @ApiProperty({ description: '질문 인덱스' })
    @IsNumber()
    questionIdx: number;
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ description: '내용' })
    @IsString()
    content: string;
}