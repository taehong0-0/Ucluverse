import { Exclude } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userIdx: number
    @Column()
    @IsString()
    name: string
    @Column()
    @IsEmail()
    email: string
    @Column()
    @IsString()
    phoneNumber: string
    @Column({ nullable: true })
    @Exclude()
    currentHashedRefreshToken?: string;
}
