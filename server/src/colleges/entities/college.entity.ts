import { IsString } from "class-validator";
import { Club } from "src/clubs/entities/club.entity";
import { Department } from "src/departments/entities/department.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class College {
    @PrimaryGeneratedColumn()
    collegeIdx: number
    @Column()
    @IsString()
    name: string
    @OneToMany(() => Department, department => department.college)
    departments: Department[];
    @OneToMany(() => Club, club => club.college, {
        nullable: true,
    })
    clubs: Club[];
}