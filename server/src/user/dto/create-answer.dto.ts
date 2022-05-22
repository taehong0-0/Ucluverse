import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator"

export class CreateAnswerDto {

    @ApiProperty({ description: '질문 인덱스에 대한 응답 내용 리스트' })
    answerList: any;
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ description: '제출 파일 경로 리스트' })
    @IsString({each: true})
    submissionFiles: string[];
}