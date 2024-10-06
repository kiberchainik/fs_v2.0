import { IsNotEmpty, IsEmail, IsString, IsBoolean } from "class-validator"

export class UpdateUserDto {
    @IsNotEmpty({message: 'Email обязателен для указания'})
    @IsEmail({}, {message: 'Не верный формат email'})
    email: string

    @IsBoolean({message: 'isTwoFactorEnabled must by boolean'})
    isTwoFactorEnabled: boolean
}