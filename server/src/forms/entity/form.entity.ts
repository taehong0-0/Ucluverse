import { IsNumber, IsString } from "class-validator";
import { Club } from "src/clubs/entities/club.entity";
import { SubmissionFile } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form{
    constructor(
        clubIdx: number,
        notice: string,
    ) {
        this.clubIdx = clubIdx;
        this.notice = notice;
    }
    @PrimaryGeneratedColumn()
    @IsNumber()
    formIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column({
        type: 'text',
    })
    @IsString()
    notice: string;
    @OneToOne(() => Club, club => club.form)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
    @OneToMany(() => Question, question => question.form, {
        cascade: true,
    })
    questions: Question[];
    @OneToMany(() => SubmissionFile, submissionFile => submissionFile.form)
    submissionFiles: SubmissionFile[];
}

@Entity()
export class Question{
    constructor(
        form: Form,
        content: string,
    ) {
        this.form = form;
        this.content = content;
    }
    @PrimaryGeneratedColumn()
    @IsNumber()
    questionIdx: number;
    @Column()
    @IsNumber()
    formIdx: number;
    @Column()
    @IsString()
    content: string;
    @ManyToOne(() => Form, form => form.questions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({
        name: 'formIdx',
        referencedColumnName: 'formIdx',
    })
    form: Form;
}