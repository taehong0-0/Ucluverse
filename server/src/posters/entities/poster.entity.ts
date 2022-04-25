import { IsNumber, IsString } from "class-validator";
import { Club } from "src/clubs/entities/club.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Poster {
    @PrimaryGeneratedColumn()
    posterIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column("varchar", {
        length: 1000,
    })
    @IsString()
    path: string;
    @OneToOne(() => Club, club => club.poster)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
}