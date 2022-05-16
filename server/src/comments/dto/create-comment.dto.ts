import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '게시글 인덱스' })
    @IsNumber()
    postingIdx: number;
    @ApiProperty({ description: '댓글 내용' })
    @IsString()
    content: string;
}