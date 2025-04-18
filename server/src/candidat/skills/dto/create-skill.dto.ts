import { IsNotEmpty, IsString } from "class-validator"

export class CreateSkillDto {
    @IsNotEmpty({ message: 'Skill обязателен для указания' })
    @IsString({ message: 'Skill должен быть строкой' })
    skill: string

    @IsString({ message: 'Вы регистируетесь как кандидат или как агентвоство? ' })
    level: string
}