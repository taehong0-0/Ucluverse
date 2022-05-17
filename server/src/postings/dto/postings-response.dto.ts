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

export class PostingCountResDto extends BaseSuccessResDto {
    constructor(postingCount: number) {
        super();
        this.res.postingCount = postingCount;
    }
    @ApiProperty({
        description: '동아리 게시판에 있는 모든 게시물의 수',
        type: Number,
        example: 4,
    })
    postingCount: number;
}