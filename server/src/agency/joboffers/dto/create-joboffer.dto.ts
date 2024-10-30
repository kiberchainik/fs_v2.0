import { Type } from "class-transformer"
import { IsArray, IsOptional, IsString, Validate, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"

@ValidatorConstraint({ name: 'isArrayString' })
export class isArrayString implements ValidatorConstraintInterface {
  validate(strings: string[]): boolean {
    if (typeof strings === 'string') {
      return false;
    }

    if (strings) {
      return strings.every((string) => !Number.isNaN(string));
    }
    return false;
  }
}

export class CreateJobofferDto {
    @IsString()
    title: string

    @IsString()
    slug?: string

    @IsString()
    description: string

    @IsString()
    categoryId: string

    @IsArray()
    @Type(() => String)
    @Validate(isArrayString, { message: 'Sector ids array value must a string' })
    @IsOptional()
    sectors?: string[]

    @IsString()
    region: string

    @IsString()
    province: string

    @IsString()
    location: string

    @IsString()
    @IsOptional()
    reallyUpTo: string
    
    @IsString()
    @IsOptional()
    branchId?: string

    @IsArray()
    @IsString({each: true})
    @Type(()=> String)
    @IsOptional()
    tags: string[]

    @IsString()
    @IsOptional()
    contractTypeId: string

    @IsString()
    @IsOptional()
    experienceMinimalId: string

    @IsString()
    @IsOptional()
    levelEducationId: string

    @IsString()
    @IsOptional()
    modeJobId: string

    @IsString()
    @IsOptional()
    workingTimeId: string
}