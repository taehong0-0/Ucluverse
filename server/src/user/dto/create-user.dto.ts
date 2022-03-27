import { IsEmail, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string
    @IsString()
    @IsEmail()
    email: string
    @IsNumber()
    studentId: number
    @IsString()
    phoneNumber: string
    @IsString()
    nickname: string
}