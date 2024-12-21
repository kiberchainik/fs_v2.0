import { IsBoolean, IsDateString, IsOptional, IsString } from "class-validator"

export class CreateExperienceDto {
    @IsString()
    company: string

    @IsString()
    contractTypeId: string

    @IsString()
    @IsOptional()
    location: string

    @IsOptional()
    @IsBoolean()
    currently: boolean

    @IsString()
    @IsDateString({}, { message: 'Не верный формат date' })
    startDate: string

    @IsString()
    @IsDateString({}, { message: 'Не верный формат date' })
    endDate: string

    @IsString()
    @IsOptional()
    description: string
}