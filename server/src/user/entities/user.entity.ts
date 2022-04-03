import { Exclude } from "class-transformer";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Department } from "src/departments/entities/department.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProfilePhoto } from "./profilePhoto.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userIdx: number;
    @Column()
    @IsString()
    name: string;
    @Column()
    @IsNumber()
    departmentIdx: number;
    @Column()
    @IsNumber()
    studentId: number
    @Column()
    @IsEmail()
    email: string;
    @Column()
    @IsString()
    phoneNumber: string
    @Column()
    @IsString()
    nickname: string
    @Column({ nullable: true })
    @Exclude()
    currentHashedRefreshToken?: string;
    @ManyToOne(() => Department, department => department.users)
    @JoinColumn({ name: 'departmentIdx', referencedColumnName: 'departmentIdx' })
    department: Department;
    @OneToOne(() => ProfilePhoto, profilePhoto => profilePhoto.user)
    @JoinColumn({ name: 'userIdx', referencedColumnName: 'userIdx' })
    profilePhoto: ProfilePhoto;
}
