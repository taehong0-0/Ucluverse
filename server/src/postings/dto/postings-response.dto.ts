import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class PostingResDto extends BaseSuccessResDto{
    constructor(postings: any){
        super();
        this.res.postings = postings;
    }
    @ApiProperty({ description: '게시글 정보' })
    postings: any;
}

export class CreatePostingResDto extends BaseSuccessResDto {
    constructor(postingIdx: number) {
        super();
        this.res.postingIdx = postingIdx;
    }
    @ApiProperty({ description: '게시글 인덱스' })
    postingIdx: number;
}