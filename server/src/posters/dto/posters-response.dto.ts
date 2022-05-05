import { BaseSuccessResDto } from "src/commons/response.dto";

export class PosterResDto extends BaseSuccessResDto{
    constructor(posters: any){
        super();
        this.res.posters = posters;
    }
    posters: any;
}