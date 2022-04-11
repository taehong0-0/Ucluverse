import { IsNumber } from "class-validator";
import { Posting } from "src/postings/entities/posting.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    likeIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsNumber()
    postingIdx: number;
    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
    @ManyToOne(() => Posting, posting => posting.likes)
    @JoinColumn({ name: 'postingIdx', referencedColumnName: 'postingIdx' })
    posting: Posting;
}