import { Type } from "class-transformer"
import { ArrayNotEmpty, IsArray, IsNumber, IsOptional, IsString, Validate, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"

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

    @IsArray()
    @ArrayNotEmpty()
    @Type(() => String)
    @Validate(isArrayString, { message: 'Category ids array value must a string' })
    categories: string[] = []

    @IsArray()
    @ArrayNotEmpty()
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

    @IsNumber()
    @IsOptional()
    branchId?: string

    @IsArray()
    @IsString({each: true})
    @Type(()=> String)
    tags: string[]
}