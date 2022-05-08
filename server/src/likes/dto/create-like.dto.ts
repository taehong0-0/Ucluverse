import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateLikeDto {
    @ApiProperty({ description: '게시글 인덱스' })
    @IsNumber()
    postingIdx: number;
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
}