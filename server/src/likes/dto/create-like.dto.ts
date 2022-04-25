import { IsNumber } from "class-validator";

export class CreateLikeDto {
    @IsNumber()
    postingIdx: number;
    @IsNumber()
    userIdx: number;
}