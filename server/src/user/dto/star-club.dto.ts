import { IsNumber } from "class-validator";

export class StarClubDto{
    @IsNumber()
    userIdx;
    @IsNumber()
    clubIdx;
}