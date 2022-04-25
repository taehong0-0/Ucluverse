import { IsNumber, IsString } from "class-validator"

export class CreateDepartmentsDto{
    @IsString()
    name: string
    @IsNumber()
    collegeIdx: number;
}