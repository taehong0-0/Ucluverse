import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class AwardsResDto extends BaseSuccessResDto{
    constructor(awards: any){
        super();
        this.res.awards = awards;
    }
    @ApiProperty({ 
        description: '수상 게시물 정보',
        example: [
            {
                "awardIdx": 100,
                "clubIdx": 15,
                "clubName": "꽁",
                "awardTitle": "대회 이름",
                "awardName": "상 이름",
                "path": "1.jpg"
            }
        ] 
    })
    awards: any
}