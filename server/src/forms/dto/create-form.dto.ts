import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFormDto {
    @ApiProperty({ description: '동아리 아이디' })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ description: '신청 폼에 노출시키는 공지사항' })
    @IsString()
    notice: string;
    @ApiProperty({ description: '신청 폼에 추가할 질문의 리스트' })
    @IsOptional()
    @IsString({ each: true })
    questions: string[];
}