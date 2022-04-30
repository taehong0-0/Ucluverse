import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    department: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsNumber()
    studentId: number;
    @IsString()
    phoneNumber: string;
    @IsString()
    nickname: string;
    @IsOptional()
    @IsString()
    profilePhotoPath: string;
}