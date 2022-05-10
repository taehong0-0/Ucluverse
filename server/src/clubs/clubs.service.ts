import { Injectable } from '@nestjs/common';
import { BaseFailMsgResDto, BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { User } from 'src/user/entities/user.entity';
import { Connection, QueryResult, Raw } from 'typeorm';
import { ClubsWithCategoriesAndClubBoardsResDto, ClubResDto } from './dto/club-respones.dto';
import { CreateClubBoardDto } from './dto/create-clubBoard.dto';
import { Club, ClubBoard, ClubCategory } from './entities/club.entity';
import * as XLSX from 'xlsx'

@Injectable()
export class ClubsService {
    constructor(
        private connection: Connection,
    ){}

    async getNewClubs() {
        const queryRunner = this.connection.createQueryRunner();
        try {
            const date = new Date();
            date.setMonth(date.getMonth() - 1);
            const clubs = await queryRunner.manager.find(Club, {
                where:{
                    createdAt: Raw((alias) => `${alias} > :date`, {date: date}),
                },
                relations:[
                    'poster',
                ]
            });
            return new ClubResDto(clubs);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async getCentralClubs() {
        const queryRunner = this.connection.createQueryRunner();
        try {            
            const centralClubs = await queryRunner.manager
                .createQueryBuilder(Club, 'club')
                .select(['club.clubIdx', 'club.name', 'club.collegeIdx', 'club.departmentIdx', 'club.clubType', 'club.logoPath'])
                .addSelect('ccs.name')
                .addSelect(['cbs.clubBoardIdx', 'cbs.name'])
                .leftJoin('club.clubCategories' , 'ccs')
                .leftJoin('club.clubBoards', 'cbs')
                .where('club.clubType = :clubType', { clubType: '중앙동아리' })
                .getMany();
            
            centralClubs.forEach(centralClub => {
                if (centralClub.clubCategories.length >= 0) {
                    const temp = []
                    centralClub.clubCategories.forEach(clubCategory => {
                        temp.push(clubCategory.name);
                    });
                    centralClub.clubCategories = temp;
                }
            });
            return new ClubsWithCategoriesAndClubBoardsResDto(centralClubs);
        } catch(e) {
            console.log(e);
            return new BaseFailResDto('중앙동아리 목록 가져오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async getDepartmentClubs() {
        const queryRunner = this.connection.createQueryRunner();
        try {
            const departmentClubs = await queryRunner.manager
                .createQueryBuilder(Club, 'club')
                .select(['club.clubIdx', 'club.name', 'club.collegeIdx', 'club.departmentIdx', 'club.clubType', 'club.logoPath'])
                .addSelect('ccs.name')
                .addSelect(['cbs.clubBoardIdx', 'cbs.name'])
                .leftJoin('club.clubCategories' , 'ccs')
                .leftJoin('club.clubBoards', 'cbs')
                .where('club.clubType = :clubType', { clubType: '과소학회' })
                .getMany();
            
                departmentClubs.forEach(departmentClubs => {
                if (departmentClubs.clubCategories.length >= 0) {
                    const temp = []
                    departmentClubs.clubCategories.forEach(clubCategory => {
                        temp.push(clubCategory.name);
                    });
                    departmentClubs.clubCategories = temp;
                }
            });
            return new ClubsWithCategoriesAndClubBoardsResDto(departmentClubs);
        } catch(e) {
            console.log(e);
            return new BaseFailResDto('과소속 소학회 목록 가져오기를 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async createClubBoard(createClubBoardDto: CreateClubBoardDto) {
        const {name, clubIdx} = createClubBoardDto;
        const result = await this.checkIfClubBoardExists(clubIdx, name);
        if(result === true){
            return new BaseFailMsgResDto('동아리 게시판이 중복됩니다.');
        }
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const clubBoard = new ClubBoard();
            clubBoard.name = name;
            const club = await queryRunner.manager.findOne(Club, {
                where:{
                    clubIdx: clubIdx,
                }
            })
            clubBoard.club = club;

            await queryRunner.manager.save(clubBoard);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release()
        }
    }

    async checkIfClubBoardExists(clubIdx: number, name: string) {
        const queryRunner = this.connection.createQueryRunner();
        try {
            const clubBoard = await queryRunner.manager.findOne(ClubBoard, {
                where:{
                    clubIdx: clubIdx,
                    name: name,
                }
            });
            if(!clubBoard) {
                return false;
            } else {
                return true;
            }
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
        
    }

    async makeExcel(clubIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        try {
            const users = await queryRunner.manager.find(User, {
                where:{
                    userClubs: {
                        clubIdx: clubIdx,
                        status: 'accepted'
                    }
                }
            });
            const wb = XLSX.utils.book_new();
            const newWorkSheet = XLSX.utils.json_to_sheet(users);
            XLSX.utils.book_append_sheet(wb, newWorkSheet, 'Users');
            const wbout = XLSX.write(wb, {bookType: "xlsx", type: "base64"});
            return wbout;
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }
}
