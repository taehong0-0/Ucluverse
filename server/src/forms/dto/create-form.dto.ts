import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { number, string } from "joi";

export class CreateFormDto {
    @ApiProperty({
        type: number, 
        description: '동아리 아이디',
        example: 20,
    })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ 
        type: string,
        description: '신청 폼에 노출시키는 공지사항',
        example: '저희 동아리에 가입 신청해주셔서 감사합니다. 질의응답 성실하게 부탁드립니다.' 
    })
    @IsString()
    notice: string;
    @ApiProperty({
        type: [string], 
        description: '신청 폼에 추가할 질문의 리스트',
        example: ['학번은 무엇인가요?', '지원동기가 무엇인가요?']
    })
    @IsString({ each: true })
    questions: string[];
}