import { ApiProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "src/commons/response.dto";

export class IsSignedUpResDto extends BaseResponseDto {
    constructor(isSignedUp){
        super();
        this.isSuccess = true;
        this.status = 200;
        this.msg = 'true'
        this.res = {
           isSignedUp,
        }
    }
    @ApiProperty({ description: '동아리 이미 가입 여부' })
    isSignedUp: boolean;
}