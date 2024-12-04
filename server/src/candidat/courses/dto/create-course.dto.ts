import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateCourseDto {
    @IsString()
    course: string

    @IsString()
    institution: string

    @IsString()
    @IsOptional()
    grade: string

    @IsNotEmpty()
    @IsDateString({}, { message: 'Не верный формат date' })
    startdate: string

    @IsNotEmpty()
    @IsDateString({}, { message: 'Не верный формат date' })
    enddate: string
}