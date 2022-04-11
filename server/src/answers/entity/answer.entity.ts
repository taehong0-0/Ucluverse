import { IsNumber, IsString } from "class-validator";
import { Question } from "src/questions/entity/question.entity";
import { UserClub } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer{
    @PrimaryGeneratedColumn()
    answerIdx: number;
    @Column()
    @IsNumber()
    userClubIdx: number;
    @Column()
    @IsNumber()
    questionIdx: number;
    @Column()
    @IsString()
    answer: string;
    
    @ManyToOne(()=>Question, question=>question.answers)
    @JoinColumn({ name: 'questionIdx', referencedColumnName: 'questionIdx' })
    question: Question
    @ManyToOne(()=>UserClub, userclub=>userclub.answers)
    @JoinColumn({ name: 'userClubIdx', referencedColumnName: 'userClubIdx' })
    userClub: UserClub;
}