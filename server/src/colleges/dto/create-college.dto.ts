import { IsString } from "class-validator"

export class CreateCollegeDto{
    @IsString()
    name: string
}