import { BaseSuccessResDto } from "src/commons/response.dto";

export class PostingResDto extends BaseSuccessResDto{
    constructor(postings: any){
        super();
        this.res.postings = postings;
    }
    postings: any;
}