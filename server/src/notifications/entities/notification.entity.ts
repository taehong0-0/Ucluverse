import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Common } from "src/commons/entity/common.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification extends Common {
    
    @PrimaryGeneratedColumn()
    @IsNumber()
    notificationIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsString()
    title: string;
    @Column()
    @IsString()
    content: string;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column()
    @Column({
        default: false,
    })
    @IsBoolean()
    isRead: boolean;

    @ManyToOne(() => User, user => user.notifications)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;

}