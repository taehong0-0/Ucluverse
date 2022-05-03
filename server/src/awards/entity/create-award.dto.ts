import { IsNumber, IsString } from "class-validator";

export class CreateAwardDto{
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