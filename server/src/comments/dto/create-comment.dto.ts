import { IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @IsNumber()
    userIdx: number;
    @IsNumber()
    postingIdx: number;
    @IsString()
    content: string;
}