import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreatePostingDto {
    @ApiProperty({ description: '유저 아이디(게시물 작성자 아이디)' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '게시물 제목' })
    @IsString()
    title: string;
    @ApiProperty({ description: '게시물 내용' })
    @IsString()
    content: string;
    @ApiProperty({ description: '사진 저장 경로의 리스트' })   
    @IsString({ each: true })
    images: string[];
    @ApiProperty({ description: '댓글 가능 여부' })
    @IsBoolean()
    allowComments: boolean;
    @ApiProperty({ description: '게시물 공개 여부' })
    @IsBoolean()
    isPublic: boolean;
    // @IsString({ each: true })
    // attachedFiles: string[];
}