import { BaseSuccessResDto } from "src/commons/response.dto";

export class AwardsResDto extends BaseSuccessResDto{
    constructor(awards: any){
        super();
        this.res.awards = awards;
    }
    awards: any
}