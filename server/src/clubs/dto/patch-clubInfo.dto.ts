import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class PatchClubInfoDto {
    @ApiProperty({ description: '동아리 소개글' })
    @IsString()
    introductionDesc: string;
    @ApiProperty({ description: '동아리 포스터 경로' })
    @IsString()
    logoPath: string;
    @ApiProperty({ description: '동아리 카테고리 리스트' })
    @IsString({each: true})
    categories: string[];
}