import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class LoginResponseDto {
    constructor(status: number, msg: string, email: string, user: any) {
        this.status = status;
        this.msg = msg;
        this.email = email;
        this.user = user;
    }
    @ApiProperty({ description: '상태' })
    @IsNumber()
    status: number;
    @ApiProperty({ description: '성공 여부 메시지' })
    @IsString()
    msg: string;
    @ApiProperty({ description: '이메일' })
    @IsOptional()
    @IsEmail()
    email: string;
    @ApiProperty({ description: '사용자 정보' })
    @IsOptional()
    user:any
}