import { Exclude } from "class-transformer";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userIdx: number
    @Column()
    @IsString()
    name: string
    @Column()
    @IsNumber()
    studentId: number
    @Column()
    @IsEmail()
    email: string
    @Column()
    @IsString()
    phoneNumber: string
    @Column()
    @IsString()
    nickname: string
    @Column({ nullable: true })
    @Exclude()
    currentHashedRefreshToken?: string;
}
