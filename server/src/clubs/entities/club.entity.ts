import { IsNumber, IsOptional, IsString } from "class-validator";
import { College } from "src/colleges/entities/college.entity";
import { Common } from "src/commons/entity/common.entity";
import { Department } from "src/departments/entities/department.entity";
import { Poster } from "src/posters/entities/poster.entity";
import { Posting } from "src/postings/entities/posting.entity";
import { Question } from "src/questions/entity/question.entity";
import { UserClub } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club extends Common{
    @PrimaryGeneratedColumn()
    clubIdx: number;
    @Column({ nullable: true })
    @IsOptional()
    @IsNumber()
    collegeIdx: number;
    @Column({ nullable: true })
    @IsOptional()
    @IsNumber()
    departmentIdx: number;
    @Column()
    @IsString()
    name: string;
    @Column()
    @IsString()
    clubType: string;
    @ManyToOne(() => College, college => college.clubs, {
        nullable: true,
    })
    @JoinColumn({ 
        name: 'collegeIdx', 
        referencedColumnName: 'collegeIdx',
    })
    college: College;
    @ManyToOne(() => Department, department => department.clubs, {
        nullable: true,
    })
    @JoinColumn({
        name: 'departmentIdx',
        referencedColumnName: 'departmentIdx',
    })
    department: Department;
    @OneToMany(() => UserClub, userClub => userClub.club)
    userClubs: UserClub[];
    @OneToMany(() => ClubBoard, clubBoard => clubBoard.club)
    clubBoards: ClubBoard[];
    @OneToMany(() => Question, question => question.club)
    questions: Question[]
    @OneToMany(() => ClubCategory, clubCategory => clubCategory.club)
    clubCategories: ClubCategory[];
    @OneToOne(() => Poster, poster => poster.club)
    poster: Poster;
}

@Entity()
export class ClubBoard {
    @PrimaryGeneratedColumn()
    clubBoardIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column()
    @IsString()
    name: string;
    @ManyToOne(() => Club, club => club.clubBoards)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
    @OneToMany(() => Posting, posting => posting.clubBoard)
    postings: Posting[];
}

@Entity()
export class ClubCategory {
    @PrimaryGeneratedColumn()
    clubCategoryIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column()
    @IsString()
    name: string;
    @ManyToOne(() => Club, club => club.clubCategories)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
}