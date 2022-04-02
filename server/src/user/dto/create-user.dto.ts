import { IsEmail, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string
    @IsString()
    department: string
    @IsString()
    @IsEmail()
    email: string
    // @IsNumber()
    @IsString()
    studentId: number
    @IsString()
    phoneNumber: string
    @IsString()
    nickname: string
}