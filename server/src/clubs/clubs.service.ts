import { Injectable } from '@nestjs/common';
import { Connection, Raw } from 'typeorm';
import { ClubResDto } from './dto/club-respones.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubsService {
    constructor(
        private connection: Connection,
    ){}

    async getNewClubs(){
        const queryrunner = this.connection.createQueryRunner();
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        const clubs = await queryrunner.manager.find(Club, {
            where:{
                createdAt: Raw((alias) => `${alias} < :date`, {date: date}),
            },
            relations:[
                'poster',
            ]
        });
        return new ClubResDto(clubs);
    }
}
