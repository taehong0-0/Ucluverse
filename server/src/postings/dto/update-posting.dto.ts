import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { CreatePostingDto } from "./create-posting.dto";

export class UpdatePostingDto {
    @IsOptional()
    @IsString()
    title: string;
    @IsOptional()
    @IsString()
    content: string;
    @IsString({each: true})
    images: string[];
    // @IsOptional()
    // @IsString({ each: true })
    // deletedAttachedFiles: any;
}