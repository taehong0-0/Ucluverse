import { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto{
    @IsNumber()
    userIdx: number;
    @IsString()
    title: string;
    @IsString()
    content: string;
    @IsNumber()
    clubIdx: number;
}