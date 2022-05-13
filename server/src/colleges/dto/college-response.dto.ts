import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";


export class CollegeResDto extends BaseSuccessResDto{
    constructor(college: any){
        super();
        this.res.college = college;
    }
    @ApiProperty({ description: '단과대 정보' })
    college: any;
}