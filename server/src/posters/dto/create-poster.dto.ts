import { IsNumber, IsString } from "class-validator";

export class CreatePosterDto {
    @IsNumber()
    clubIdx: number;
    @IsString()
    path: string;
    @IsString()
    content: string;
}