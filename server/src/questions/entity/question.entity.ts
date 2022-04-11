import { IsNumber, IsString } from "class-validator";
import { Answer } from "src/answers/entity/answer.entity";
import { Club } from "src/clubs/entities/club.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum questionType{
    text='text',
    checkbox = 'checkbox',
    intensity = 'intensity',
}

@Entity()
export class Question{
    @PrimaryGeneratedColumn()
    questionIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column()
    type: questionType;
    @Column()
    @IsString()
    content: string;
    @Column()
    title: string;

    @OneToMany(()=>Answer, answer=>answer.question)
    answers: Answer[]
    @ManyToOne(() => Club, club => club.questions)
    @JoinColumn({ name: 'clubIdx', referencedColumnName: 'clubIdx' })
    club: Club;
}