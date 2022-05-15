import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ClubBoard } from "src/clubs/entities/club.entity";
import { Comment } from "src/comments/entity/comment.entity";
import { Common } from "src/commons/entity/common.entity";
import { Like } from "src/likes/entity/likes.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posting extends Common {
    @PrimaryGeneratedColumn()
    postingIdx: number;
    @Column()
    @IsNumber()
    clubBoardIdx: number;
    @Column()
    @IsNumber()
    userIdx: number;
    @Column()
    @IsString()
    title: string;
    @Column({
        type: 'text',
    })
    @IsString()
    content: string;
    @Column({
        default: true
    })
    @IsBoolean()
    allowComments: boolean;
    @Column({
        default: true
    })
    @IsBoolean()
    isPublic: boolean;
    @ManyToOne(() => ClubBoard, clubBoard => clubBoard.postings)
    @JoinColumn({
        name: 'clubBoardIdx',
        referencedColumnName: 'clubBoardIdx',
    })
    clubBoard: ClubBoard;
    @ManyToOne(() => User, user => user.postings)
    @JoinColumn({
        name: 'userIdx',
        referencedColumnName: 'userIdx',
    })
    user: User;
    @OneToMany(() => Like, like => like.posting)
    likes: Like[];
    @OneToMany(() => Comment, comment => comment.posting)
    comments: Comment[];
    @OneToMany(() => Image, image => image.posting, {
        cascade: true,
    })
    images: Image[];
    @OneToMany(() => AttachedFile, attachedFile => attachedFile.posting)
    attachedFiles: AttachedFile[];
    @OneToMany(() => Video, video => video.posting)
    videos: Video[];
}

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    imageIdx: number;
    @Column()
    @IsNumber()
    postingIdx: number;
    @Column("varchar", {
        length: 1000,
    })
    @IsString()
    path: string;
    @ManyToOne(() => Posting, posting => posting.images, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({
        name: 'postingIdx',
        referencedColumnName: 'postingIdx',
    })
    posting: Posting;
}

@Entity()
export class AttachedFile {
    @PrimaryGeneratedColumn()
    attachedFileIdx: number;
    @Column()
    @IsNumber()
    postingIdx: number;
    @Column("varchar", {
        length: 1000,
    })
    @IsString()
    path: string;
    @ManyToOne(() => Posting, posting => posting.attachedFiles)
    @JoinColumn({
        name: 'postingIdx',
        referencedColumnName: 'postingIdx',
    })
    posting: Posting;
}

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    videoIdx: number;
    @Column()
    @IsNumber()
    postingIdx: number;
    @Column("varchar", {
        length: 1000,
    })
    @IsString()
    link: string;
    @ManyToOne(() => Posting, posting => posting.videos)
    @JoinColumn({
        name: 'postingIdx',
        referencedColumnName: 'postingIdx',
    })
    posting: Posting;
}