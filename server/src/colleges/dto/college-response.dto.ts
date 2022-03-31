import { BaseSuccessResDto } from "src/commons/response.dto";
import { College } from "../entities/college.entity";

export class CollegeResDto extends BaseSuccessResDto{
    constructor(college: any){
        super();
        this.college = college;
        this.res.college = college;
    }
    college: any;
}