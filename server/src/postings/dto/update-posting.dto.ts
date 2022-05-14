import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { CreatePostingDto } from "./create-posting.dto";

export class UpdatePostingDto {
    @ApiProperty({ description: '수정된 게시물 제목' })
    // @IsOptional()
    @IsString()
    title: string;
    @ApiProperty({ description: '수정된 게시물 내용' })
    // @IsOptional()
    @IsString()
    content: string;
    @ApiProperty({ description: '수정된 게시물 사진 저장 경로 리스트(수정될 게시물에 포함된 모든 사진의 저장 경로를 담아서 보내야 함)' })
    @IsString({each: true})
    images: string[];
    @ApiProperty({ description: '수정된 댓글 가능 여부' })
    // @IsOptional()
    @IsBoolean()
    allowComments: boolean;
    @ApiProperty({ description: '수정된 게시물 공개 여부 '})
    // @IsOptional()
    @IsBoolean()
    isPublic: boolean;
    // @IsOptional()
    // @IsString({ each: true })
    // deletedAttachedFiles: any;
}