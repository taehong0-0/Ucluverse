import { IsNumber, IsString } from "class-validator";
import { ClubBoard } from "src/clubs/entities/club.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posting {
    @PrimaryGeneratedColumn()
    postingIdx: number;
    @Column()
    @IsNumber()
    clubBoardIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsString()
    title: string;
    @Column({
        type: 'text',
    })
    @IsString()
    content: string;
    @ManyToOne(() => ClubBoard, clubBoard => clubBoard.postings)
    @JoinColumn({
        name: 'clubBoardIdx',
        referencedColumnName: 'clubBoardIdx',
    })
    clubBoard: ClubBoard;
    @ManyToOne(() => User, user => user.postings)
    @JoinColumn({
        name: 'userIdx',
        referencedColumnName: 'userIdx',
    })
    user: User;
}