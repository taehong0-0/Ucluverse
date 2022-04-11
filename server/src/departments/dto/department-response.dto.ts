import { BaseSuccessResDto } from "src/commons/response.dto";

export class DepartmentResDto extends BaseSuccessResDto{
    constructor(departments: any){
        super();
        this.res.departments = departments;
    }
    departments: any;
}