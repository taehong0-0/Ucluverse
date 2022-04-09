import { IsNumber, IsString } from "class-validator";

export class CreateClubBoardDto {
    @IsNumber()
    clubIdx: number;
    @IsString()
    name: string;
}