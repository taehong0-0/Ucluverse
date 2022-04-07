import { BaseSuccessResDto } from "src/commons/response.dto";

export class PostingResDto extends BaseSuccessResDto{
    constructor(postings: any){
        super();
        this.res.postings = postings;
    }
    postings: any;
}

export class CreatePostingResDto extends BaseSuccessResDto {
    constructor(postingIdx: number) {
        super();
        this.res.postingIdx = postingIdx;
    }
    postingIdx: number;
}