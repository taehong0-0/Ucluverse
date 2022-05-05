import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ description: '변경된 이름' })
    @IsOptional()
    @IsString()
    name: string;
    @ApiProperty({ description: '변경된 학과' })
    @IsOptional()
    @IsString()
    department: string;
    @ApiProperty({ description: '변경된 학번' })
    @IsOptional()
    @IsNumber()
    studentId: number;
    @ApiProperty({ description: '변경된 핸드폰 번호' })
    @IsOptional()
    @IsString()
    phoneNumber: string;
    @ApiProperty({ description: '변경된 별명' })
    @IsOptional()
    @IsString()
    nickname: string;
    @ApiProperty({ description: '변경된 프로필 사진 저장 경로' })
    @IsOptional()
    @IsString()
    profilePhotoPath: string;
}