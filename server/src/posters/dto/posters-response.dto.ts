import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class PosterResDto extends BaseSuccessResDto{
    constructor(posters: any){
        super();
        this.res.posters = posters;
    }
    @ApiProperty({ description: '포스터 정보' })
    posters: any;
}