import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class ClubResDto extends BaseSuccessResDto{
    constructor(clubs: any){
        super();
        this.res.clubs = clubs;
    }
    @ApiProperty({ description: '동아리 정보' })
    clubs: any;
}

export class ClubsWithCategoriesAndClubBoardsResDto extends BaseSuccessResDto {
    constructor(clubs: any) {
        super();
        this.res.clubs = clubs;
    }
    @ApiProperty({
        description: '(중앙)동아리 정보',
    })
    clubs: any;
}