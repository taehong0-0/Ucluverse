import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto{
    @ApiProperty({ description: '유저 인덱스' })
    @IsNumber()
    userIdx: number;
    @ApiProperty({ description: '알림 제목' })
    @IsString()
    title: string;
    @ApiProperty({ description: '알림 내용' })
    @IsString()
    content: string;
    @ApiProperty({ description: '보낸 동아리 인덱스' })
    @IsNumber()
    clubIdx: number;
}