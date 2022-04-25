import { IsString } from "class-validator"

export class UpdateCollegeDto{
    @IsString()
    name: string
}