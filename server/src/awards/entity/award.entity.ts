import { IsNumber, IsString } from "class-validator";
import { Club } from "src/clubs/entities/club.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Award {
    @PrimaryGeneratedColumn()
    awardIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column()
    @IsString()
    competitionName: string;
    @Column()
    @IsString()
    awardName: string;
    @Column()
    @IsString()
    content: string;
    @Column()
    @IsString()
    path: string;
    @ManyToOne(() => Club, club => club.awards)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
}