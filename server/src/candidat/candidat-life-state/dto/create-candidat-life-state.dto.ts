import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";
import { DriverCategory } from "@prisma/client";

export class CreateCandidatLifeStateDto {
    @IsArray()
    @IsString({ each: true })
    @Type(() => String)
    @IsOptional()
    driverCategory: DriverCategory[]

    @IsBoolean()
    availabilityTransport: boolean

    @IsString()
    maritalStatus: string
}