import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty({ description: '이름' })
    @IsString()
    name: string;
    @ApiProperty({ description: '학과' })
    @IsString()
    department: string;
    @ApiProperty({ description: '이메일' })
    @IsString()
    @IsEmail()
    email: string;
    @ApiProperty({ description: '학번' })
    @IsNumber()
    studentId: number;
    @ApiProperty({ description: '핸드폰 번호' })
    @IsString()
    phoneNumber: string;
    @ApiProperty({ description: '별명' })
    @IsString()
    nickname: string;
    @ApiProperty({ description: '프로필 사진 저장 경로' })
    @IsOptional()
    @IsString()
    profilePhotoPath: string;
}