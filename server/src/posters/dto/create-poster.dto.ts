import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePosterDto {
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ description: '포스터 사진 경로' })
    @IsString()
    path: string;
    @ApiProperty({ description: '내용 정보' })
    @IsString()
    content: string;
}