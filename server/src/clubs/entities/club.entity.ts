import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Award } from "src/awards/entity/award.entity";
import { College } from "src/colleges/entities/college.entity";
import { Common } from "src/commons/entity/common.entity";
import { Department } from "src/departments/entities/department.entity";
import { Form } from "src/forms/entity/form.entity";
import { Poster } from "src/posters/entities/poster.entity";
import { Posting } from "src/postings/entities/posting.entity";
import { SubmissionFile, UserClub } from "src/user/entities/user.entity";
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
    @Column({ nullable: true })
    @IsString()
    logoPath: string;
    @Column({ nullable: true })
    @IsString()
    introductionPath: string;
    @Column({ nullable: true })
    @IsString()
    introductionDesc: string;
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
    @OneToMany(() => ClubCategory, clubCategory => clubCategory.club)
    clubCategories: ClubCategory[];
    @OneToMany(() => Award, award => award.club)
    awards: Award[];
    @OneToOne(() => Poster, poster => poster.club)
    poster: Poster;
    @OneToOne(() => Form, form => form.club)
    form: Form;
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
