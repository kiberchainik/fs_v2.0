import { IsPasswordsMatchinConstraint } from "@/libs/common/decorators/is-passwords-matchin-constraint"
import { IsEmail, IsString, MinLength, IsNotEmpty, Validate } from "class-validator"
import { UserRole } from "prisma/__generated__"

export class RegisterDto {
    @IsNotEmpty({message: 'Email обязателен для указания'})
    @IsEmail({}, {message: 'Не верный формат email'})
    @IsString({message: 'Email должен быть строкой'})
    email: string

    @MinLength(6, {message: 'Пароль обязателен и не может быть менее 6 символов'})
    @IsString({message: 'Пароль должен быть строкой'})
    password: string

    @MinLength(6, {message: 'Пароль обязателен и не может быть менее 6 символов'})
    @IsString({message: 'Пароль должен быть строкой'})
    @Validate(IsPasswordsMatchinConstraint, {
        message: 'Пароли не совпадают'
    })
    passwordRepeat: string

    @IsString({message: 'Вы регистируетесь как кандидат или как агентвоство? '})
    role: UserRole
}