import { IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class ProfilePhoto {
    @PrimaryGeneratedColumn()
    profilePhotoIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column("varchar", {
        length: 1000,
    })
    @IsString()    
    path: string;
    @OneToOne(() => User, user => user.profilePhoto)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    user: User;
}