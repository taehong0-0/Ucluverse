import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { PostingResDto } from './dto/postings-response.dto';
import { Posting } from './entities/posting.entity';

@Injectable()
export class PostingsService {
    constructor(
        private connection: Connection,
    ){}

    async getPostingsByClubBoard(clubBoardIdx : number){
        const queryrunner = this.connection.createQueryRunner();
        const postings = await queryrunner.manager.find(Posting, {
            where: {
                clubBoardIdx: clubBoardIdx,
            },
            order: {
                postingIdx: "ASC",
            }
        });
        return new PostingResDto(postings);
    }
}
