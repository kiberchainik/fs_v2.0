import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";
import { DriverCategory, MaritalStatus } from "prisma/__generated__";

export class CreateCandidatLifeStateDto {
    @IsArray()
    @IsString({ each: true })
    @Type(() => String)
    @IsOptional()
    driverCategory: DriverCategory[]

    @IsBoolean()
    availabilityTransport: boolean

    @IsString()
    maritalStatus: MaritalStatus
}