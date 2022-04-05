import { IsNumber, IsString } from "class-validator";
import { ClubBoard } from "src/clubs/entities/club.entity";
import { Comment } from "src/comments/entity/comment.entity";
import { Like } from "src/likes/entity/likes.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @OneToMany(() => Like, like => like.posting, {
        nullable: true,
    })
    likes: Like[];
    @OneToMany(() => Comment, comment => comment.posting, {
        nullable: true,
    })
    comments: Comment[];
}