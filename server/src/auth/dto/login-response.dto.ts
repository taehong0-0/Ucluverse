import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class LoginResponseDto {
    constructor(status: number, msg: string, userIdx: number, email: string) {
        this.status = status;
        this.msg = msg;
        this.userIdx = userIdx;
        this.email = email;
    }
    @IsNumber()
    status: number;
    @IsString()
    msg: string;
    @IsOptional()
    @IsNumber()
    userIdx: number;
    @IsOptional()
    @IsEmail()
    email: string;
}