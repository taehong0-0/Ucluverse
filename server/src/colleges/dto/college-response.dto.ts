import { BaseSuccessResDto } from "src/commons/response.dto";


export class CollegeResDto extends BaseSuccessResDto{
    constructor(college: any){
        super();
        this.res.college = college;
    }
    college: any;
}