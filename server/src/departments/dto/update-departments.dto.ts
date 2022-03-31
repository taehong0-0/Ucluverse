import { IsNumber, IsString } from "class-validator"

export class UpdateDepartmentsDto{
    @IsString()
    name: string
    @IsNumber()
    collegeIdx: number;
}