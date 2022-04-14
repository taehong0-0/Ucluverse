import { IsNumber } from "class-validator"

export class ChangeUserClubStatus{
    @IsNumber()
    userIdx: number
    @IsNumber()
    clubIdx: number
}