import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString({message:'Название категрии нужно указать обязательно'})
    name: string

    @IsString()
    seo: string

    @IsString()
    description: string

    @IsString({
		each: true,
		message: 'Ид категории должен иметь строчный формат'
	})
    @IsOptional()
    parentId?: string[]

    @IsString({
		each: true,
		message: 'Ид сектора должен иметь строчный формат'
	})
    @IsOptional()
    sectorIds?: string[]
}