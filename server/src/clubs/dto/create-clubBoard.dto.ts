import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateClubBoardDto {
    @ApiProperty({ description: '동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
    @ApiProperty({ description: '동아리 게시판 이름' })
    @IsString()
    name: string;
}