import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateCommentDto } from "./create-comment.dto";

export class UpdateCommentDto {
    @ApiProperty({ description: '댓글 내용' })
    @IsString()
    content: string;
}