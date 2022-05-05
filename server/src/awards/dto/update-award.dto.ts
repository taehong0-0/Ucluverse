import { IsNumber, IsString } from "class-validator";

export class UpdateAwardDto{
    @IsNumber()
    awardIdx: number
    @IsNumber()
    clubIdx: number
    @IsString()
    competitionName: string;
    @IsString()
    awardName: string;
    @IsString()
    content: string;
    @IsString()
    path: string;
}