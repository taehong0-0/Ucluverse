import { IsNumber, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    commentIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsNumber()
    postingIdx: number;
    @Column()
    @IsString()
    content: string;
    @ManyToOne(() => User, user => user.comments)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
}