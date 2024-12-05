import { IsBoolean, IsDateString, IsOptional, IsString } from "class-validator"
import { ContractType } from "prisma/__generated__"

export class CreateExperienceDto {
    @IsString()
    company: string

    @IsString()
    contract: ContractType

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