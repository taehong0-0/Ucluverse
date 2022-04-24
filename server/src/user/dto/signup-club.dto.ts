import { IsBoolean, IsNumber, IsString } from "class-validator"

export class SignupClubDto{
    @IsNumber()
    userIdx: number
    @IsNumber()
    clubIdx: number
}