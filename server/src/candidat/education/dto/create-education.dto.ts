import { IsDateString, IsOptional, IsString } from "class-validator"

export class CreateEducationDto {
    @IsString()
    levelId: string

    @IsString()
    school: string

    @IsString()
    @IsOptional()
    grade: string

    @IsString()
    @IsDateString({}, { message: 'Не верный формат date' })
    startdate: string

    @IsString()
    @IsDateString({}, { message: 'Не верный формат date' })
    enddate: string

    @IsString()
    @IsOptional()
    description: string
}