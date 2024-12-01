import { IsNotEmpty, IsString } from "class-validator"
import { LanguageLevel } from "prisma/__generated__"

export class CreateLanguageDto {
    @IsNotEmpty({ message: 'Language обязателен для указания' })
    @IsString({ message: 'Language должен быть строкой' })
    language: string

    @IsString({ message: 'Вы регистируетесь как кандидат или как агентвоство? ' })
    level: LanguageLevel
}