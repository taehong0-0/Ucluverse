import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { truncateSync } from "fs";

export class CreatePostingDto {
    @ApiProperty({ 
        description: '유저 아이디(게시물 작성자 아이디)',
        example: 3,
        required: true, 
    })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ 
        description: '게시물 제목',
        example: '개강총회 공지사항 입니다.',
        required: true,
    })
    @IsString()
    title: string;
    @ApiProperty({ 
        description: '게시물 내용',
        example: '어디로 오시면 되고 저기로 가시면 됩니다.',
        required: true,
    })
    @IsString()
    content: string;
    @ApiProperty({ 
        description: '이미지 저장 경로의 리스트(없으면 빈 배열)',
        example: ['a.jpg', 'b.jpg', 'c.jpeg'],
        required: true,
    })   
    // @IsOptional()
    @IsString({ each: true })
    images: string[];
    @ApiProperty({ 
        description: '댓글 가능 여부',
        example: true,
        required: true,
    })
    @IsBoolean()
    allowComments: boolean;
    @ApiProperty({ 
        description: '게시물 공개 여부',
        example: true,
        required: true,
    })
    @IsBoolean()
    isPublic: boolean;
    // @IsString({ each: true })
    // attachedFiles: string[];
}