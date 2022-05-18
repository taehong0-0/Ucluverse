import { Exclude } from "class-transformer";
import { Comment } from "src/comments/entity/comment.entity";
import { Like } from "src/likes/entity/likes.entity";
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";
import { Club } from "src/clubs/entities/club.entity";
import { Department } from "src/departments/entities/department.entity";
import { Posting } from "src/postings/entities/posting.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProfilePhoto } from "./profilePhoto.entity";
import { Notification } from "src/notifications/entities/notification.entity";
import { Form, Question } from "src/forms/entity/form.entity";

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
    profilePhoto: ProfilePhoto;
    @OneToMany(() => Like, like=>like.user)
    likes: Like[]
    @OneToMany(() => Comment, comment=>comment.user)
    comments: Comment[]
    @OneToMany(() => UserClub, userClub => userClub.user)
    userClubs: UserClub[];
    @OneToMany(() => Posting, posting => posting.user)
    postings: Posting[];
    @OneToMany(() => Notification, notification => notification.user)
    notifications: Notification[];
}

@Entity()
export class UserClub {
    @PrimaryGeneratedColumn()
    userClubIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsNumber()
    clubIdx: number;
    @Column({
        nullable: true,
    })
    @IsString()
    role: string;
    @Column({
        nullable: true,
    })
    @IsString()
    status: string;
    @Column()
    @IsBoolean()
    star: boolean;
    @ManyToOne(() => User, user => user.userClubs)
    @JoinColumn({
        name: 'userIdx',
        referencedColumnName: 'userIdx'
    })
    user: User;
    @ManyToOne(() => Club, club => club.userClubs)
    @JoinColumn({
        name: 'clubIdx',
        referencedColumnName: 'clubIdx',
    })
    club: Club;
    @OneToMany(() => Answer, answer => answer.userClub)
    answers: Answer[];
    @OneToMany(() => SubmissionFile, SubmissionFile => SubmissionFile.userClub)
    submissionFiles: SubmissionFile[];
}

@Entity()
export class Answer{
    @PrimaryGeneratedColumn()
    answerIdx: number;
    @Column()
    @IsNumber()
    questionIdx: number;
    @Column()
    @IsNumber()
    userClubIdx: number;
    @Column()
    @IsString()
    content: string;
    @ManyToOne(() => UserClub, userClub => userClub.answers)
    @JoinColumn({
        name: 'userClubIdx',
        referencedColumnName: 'userClubIdx'
    })
    userClub: UserClub;
    @ManyToOne(() => Question, question => question.answers, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({
        name: 'questionIdx',
        referencedColumnName: 'questionIdx'
    })
    question: Question;
}

@Entity()
export class SubmissionFile{
    @PrimaryGeneratedColumn()
    submissionFileIdx: number;
    @Column()
    @IsNumber()
    formIdx: number;
    @Column()
    @IsNumber()
    userClubIdx: number;
    @Column()
    @IsString()
    path: string;
    @ManyToOne(() => UserClub, userClub => userClub.submissionFiles)
    @JoinColumn({
        name: 'userClubIdx',
        referencedColumnName: 'userClubIdx'
    })
    userClub: UserClub;
    @ManyToOne(() => Form, form => form.submissionFiles)
    @JoinColumn({
        name: 'formIdx',
        referencedColumnName: 'formIdx'
    })
    form: Form;
}



