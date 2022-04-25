import { BaseSuccessResDto } from "src/commons/response.dto";

export class ClubResDto extends BaseSuccessResDto{
    constructor(clubs: any){
        super();
        this.res.clubs = clubs;
    }
    clubs: any;
}