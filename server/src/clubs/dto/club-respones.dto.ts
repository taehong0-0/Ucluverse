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
        description: '카테고리와 게시판 정보를 포함한 동아리 정보',
    })
    clubs: any;
}