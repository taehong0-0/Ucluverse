import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    name: string;
    @IsString()
    department: string;
    @IsNumber()
    studentId: number;
    @IsString()
    phoneNumber: string;
    @IsString()
    nickname: string;
    @IsNumber()
    isProfilePhotoChanged: number;
}