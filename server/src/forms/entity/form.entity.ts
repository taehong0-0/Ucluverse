import { IsNumber } from "class-validator";
import { Club, Question } from "src/clubs/entities/club.entity";
import { SubmissionFile } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form{
    @PrimaryGeneratedColumn()
    @IsNumber()
    formIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @OneToOne(() => Club, club => club.form)
    @JoinColumn({
        referencedColumnName: 'clubIdx',
    })
    club: Club;
    @OneToMany(() => Question, question => question.form)
    questions: Question[];
    @OneToMany(() => SubmissionFile, submissionFile => submissionFile.form)
    submissionFiles: SubmissionFile[];
}