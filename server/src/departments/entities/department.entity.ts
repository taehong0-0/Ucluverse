import { IsNumber, IsString } from "class-validator";
import { College } from "src/colleges/entities/college.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    departmentIdx: number;
    @Column()
    @IsNumber()
    collegeIdx: number;
    @Column()
    @IsString()
    name: string;
    @ManyToOne(() => College, college => college.departments)
    @JoinColumn({ name: 'collegeIdx', referencedColumnName: 'collegeIdx' })
    college: College;
    @OneToMany(() => User, user => user.department)
    users: User[]
}