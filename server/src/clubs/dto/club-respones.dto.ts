import { ApiProperty } from "@nestjs/swagger";
import { number } from "joi";
import { BaseSuccessResDto } from "src/commons/response.dto";
import { Club } from "../entities/club.entity";

export class ClubResDto extends BaseSuccessResDto{
    constructor(clubs: any){
        super();
        this.res.clubs = clubs;
    }
    @ApiProperty({ description: '동아리 정보' })
    clubs: any;
}


class test {

}
export class ClubsWithCategoriesAndClubBoardsResDto extends BaseSuccessResDto {
    constructor(clubs: any) {
        super();
        this.res.clubs = clubs;
    }
    @ApiProperty({
        description: '카테고리와 게시판 정보를 포함한 동아리 정보',
        type: [Club],
        example: [
            {
                "clubIdx": 100,
                "collegeIdx": null,
                "departmentIdx": null,
                "name": "꽁",
                "clubType": "과소학회",
                "logoPath": "1.jpg",
                "introductionPath": null,
                "introductionDesc": null,
                "clubCategories": [
                    "외국인",
                    "운동",
                    "스쿼시"
                ],
                "clubBoards": [
                    {
                        "무슨게시판": 101,
                        "자유게시판": 100
                    }
                ]
            }
        ]
    })
    clubs: Club[];
}