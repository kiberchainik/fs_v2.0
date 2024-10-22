import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString({message:'Название категрии нужно указать обязательно'})
    name: string

    @IsString()
    seo: string

    @IsString()
    description: string

    @IsNumber({}, {each: true})
    @IsOptional()
    parentId?: string[]

    @IsNumber({}, {each: true})
    @IsOptional()
    sectorIds?: string[]
}