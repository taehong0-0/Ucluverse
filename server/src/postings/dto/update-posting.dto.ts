import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { CreatePostingDto } from "./create-posting.dto";

export class UpdatePostingDto {
    @IsString()
    title: string;
    @IsOptional()
    @IsString()
    content: string;
    @IsOptional()
    // @IsNumber({}, {each: true})
    deletedImages: any;
    @IsOptional()
    // @IsNumber({}, {each:true})
    deletedAttachedFiles: any;
}