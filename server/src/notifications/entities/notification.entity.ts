import { IsBoolean, IsNumber, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
    
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
    @IsString()
    from: string;
    @Column()
    @IsBoolean()
    read: boolean;

    @ManyToOne(() => User, user => user.notifications)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;

}