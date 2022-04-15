import { IsNumber } from "class-validator"

export class ChangeUserClubStatusDto{
    @IsNumber()
    userIdx: number
    @IsNumber()
    clubIdx: number
}