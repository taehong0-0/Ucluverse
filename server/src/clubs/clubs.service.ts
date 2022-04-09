import { Injectable } from '@nestjs/common';
import { BaseFailMsgResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Connection, Raw } from 'typeorm';
import { ClubResDto } from './dto/club-respones.dto';
import { CreateClubBoardDto } from './dto/create-clubBoard.dto';
import { Club, ClubBoard } from './entities/club.entity';

@Injectable()
export class ClubsService {
    constructor(
        private connection: Connection,
    ){}

    async getNewClubs(){
        const queryrunner = this.connection.createQueryRunner();
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
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

    async createClubBoard(createClubBoardDto: CreateClubBoardDto){
        const {name, clubIdx} = createClubBoardDto;
        const result = await this.checkIfClubBoardExists(clubIdx, name);
        if(result === true){
            return new BaseFailMsgResDto('동아리 게시판이 중복됩니다.');
        }
        const queryrunner = this.connection.createQueryRunner();
        const clubBoard = new ClubBoard();
        clubBoard.name = name;
        const club = await queryrunner.manager.findOne(Club, {
            where:{
                clubIdx: clubIdx,
            }
        })
        clubBoard.club = club;
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.save(clubBoard);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release()
        }
    }

    async checkIfClubBoardExists(clubIdx: number, name: string){
        const queryrunner = this.connection.createQueryRunner();
        const clubBoard = queryrunner.manager.findOne(ClubBoard, {
            where:{
                clubIdx: clubIdx,
                name: name,
            }
        });
        if(!clubBoard){
            return false;
        }else{
            return true;
        }
    }
}
