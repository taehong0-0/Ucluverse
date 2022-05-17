import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";
import { Posting } from "../entities/posting.entity";

export class PostingResDto extends BaseSuccessResDto{
    constructor(postings: any){
        super();
        this.res.postings = postings;
    }
    @ApiProperty({ 
        description: '게시글 상세 정보',
        example: [
            {
                "posingIdx": 100,
                "title": "제목",
                "content": "내용",
                "createdAt": "2022-05-15 09:16:14",
                "updatedAt": "2022-05-15 09:16:14",
                "allowComments": true,
                "isPublic": true,
                "images": [
                    {
                        "imageIdx": 1,
                        "imagePath": "123.png",
                    },
                    {
                        "imageIdx": 2,
                        "imagePath": "234.png",
                    }
                ],
                "attachedFiles": [
                    {
                        "attachedFileIdx": 1,
                        "attachedFilePath": "123.png",
                    },
                    {
                        "attachedFileIdx": 2,
                        "attachedFilePath": "234.png",
                    }
                ],
                "likes": [
                    {
                        "likeIdx": 1,
                        "userIdx": 1,
                    },
                    {
                        "likeIdx": 2,
                        "userIdx": 2,
                    }
                ],
                "comments": [
                    {
                        "commentIdx": 1,
                        "userIdx": 1,
                        "content": "댓글 내용1"
                    },
                    {
                        "likeIdx": 2,
                        "userIdx": 2,
                        "content": "댓글 내용2"
                    }
                ],
            }
        ]  
    })
    postings: any;
}

export class PostingsListResDto extends BaseSuccessResDto{
    constructor(postings: any){
        super();
        this.res.postings = postings;
    }
    @ApiProperty({ 
        description: '동아리 게시판 인덱스에 대한 게시글 리스트',
        example: [
            {
                "posingIdx": 100,
                "title": "제목",
                "clubIdx": 15,
                "author": "홍길동",
                "type": "공지사항",
                "createdAt": "2022-05-15 09:16:14",
                "updatedAt": "2022-05-15 09:16:14",
                "path": "1.jpg"
            }
        ] 
    })
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