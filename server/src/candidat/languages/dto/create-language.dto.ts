import { IsNotEmpty, IsString } from "class-validator"

export class CreateLanguageDto {
    @IsNotEmpty({ message: 'Language обязателен для указания' })
    @IsString({ message: 'Language должен быть строкой' })
    language: string

    @IsString({ message: 'Вы регистируетесь как кандидат или как агентвоство? ' })
    level: string
}