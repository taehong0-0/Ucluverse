import { IsNumber, IsOptional, IsString } from "class-validator";

export class LoginResponseDto {
    constructor(status: number, msg: string, userIdx: number) {
        this.status = status;
        this.msg = msg;
        this.userIdx = userIdx;
    }
    @IsNumber()
    status: number;
    @IsString()
    msg: string;
    @IsOptional()
    @IsNumber()
    userIdx: number;
}