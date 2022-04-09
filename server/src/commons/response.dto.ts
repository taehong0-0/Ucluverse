import { IsBoolean, IsNumber, IsString } from "class-validator";

export class BaseResponseDto{
    constructor(){}

    @IsBoolean()
    isSuccess: boolean;
    @IsNumber()
    status: number;
    @IsString()
    msg: string;
    res: any;
}

export class BaseSuccessResDto extends BaseResponseDto{
    constructor(){
        super();
        this.isSuccess = true;
        this.status = 200;
        this.msg = 'true'
        this.res = {
           msg: this.msg,
        }
    }
}

export class BaseFailResDto extends BaseResponseDto{
    constructor(msg: string){
        super();
        this.isSuccess = false;
        this.status = 400;
        this.msg = msg;
        this.res = {
            msg,
        }
    }
}

export class BaseFailMsgResDto extends BaseResponseDto{
    constructor(msg: string){
        super();
        this.isSuccess = true;
        this.status = 200;
        this.msg = msg;
        this.res = {
            msg,
        }
    }
}