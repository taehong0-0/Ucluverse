import { IsNumber, IsString } from "class-validator";

export class CreatePostingDto {
    @IsNumber()
    userIdx: number;
    @IsString()
    title: string;
    @IsString()
    content: string;   
}