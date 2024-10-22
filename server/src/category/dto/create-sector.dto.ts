import { IsString } from "class-validator"

export class CreateSectorDto {
    @IsString({message:'Название сектора нужно указать обязательно'})
    name: string

    @IsString()
    seo: string

    @IsString()
    categoryId: string
}