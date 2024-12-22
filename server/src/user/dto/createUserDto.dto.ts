import { IsEmail, IsString, MinLength, IsNotEmpty } from "class-validator";
import { AuthMethod, UserRole } from "@prisma/client";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Email обязателен для указания' })
    @IsEmail({}, { message: 'Не верный формат email' })
    email: string

    @MinLength(6, { message: 'Пароль обязателен и не может быть менее 6 символов' })
    @IsString()
    password: string

    method: AuthMethod

    isVerified: boolean

    @IsString({ message: 'Вы регистируетесь как кандидат или как агентвоство? ' })
    role: UserRole
}