import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class LoginResDto extends BaseSuccessResDto {
    constructor(user: any){
        super()
        this.res.user = user;
    }
    user: any;
}

export class LoginResponseDto {
    constructor(status: number, msg: string, email: string, user: any) {
        this.status = status;
        this.msg = msg;
        this.email = email;
        this.user = user;
    }
    @IsNumber()
    status: number;
    @IsString()
    msg: string;
    @IsOptional()
    @IsEmail()
    email: string;
    @IsOptional()
    user:any
}