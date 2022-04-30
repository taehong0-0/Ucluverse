import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    department: string;
    @IsOptional()
    @IsNumber()
    studentId: number;
    @IsOptional()
    @IsString()
    phoneNumber: string;
    @IsOptional()
    @IsString()
    nickname: string;
    @IsOptional()
    @IsString()
    profilePhotoPath: string;
}