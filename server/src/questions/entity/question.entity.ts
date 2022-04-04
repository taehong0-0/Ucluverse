import { IsNumber, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}