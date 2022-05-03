import { IsNumber, IsString } from "class-validator";

export class CreatePostingDto {
    @IsNumber()
    userIdx: number;
    @IsString()
    title: string;
    @IsString()
    content: string;   
    @IsString({ each: true })
    images: string[];
    // @IsString({ each: true })
    // attachedFiles: string[];
}