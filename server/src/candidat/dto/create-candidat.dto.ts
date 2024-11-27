import { ArrayMinSize, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateCandidatDto {
    @IsNotEmpty({ message: 'Email обязателен для указания' })
    @IsEmail({}, { message: 'Не верный формат email' })
    email: string

    @IsNotEmpty({ message: 'Email обязателен для указания' })
    @IsString({ message: 'Не верный формат email' })
    name: string

    @IsNotEmpty({ message: 'Email обязателен для указания' })
    @IsString({ message: 'Не верный формат email' })
    lastname: string

    @IsNotEmpty({ message: 'Email обязателен для указания' })
    @IsDateString({}, { message: 'Не верный формат date' })
    birthday: string

    @IsString({
        message: 'Укажите хотя бы одну картинку',
        each: true
    })
    @ArrayMinSize(1, { message: 'Должна быть хотя бы одна картинка' })
    @IsNotEmpty({
        each: true,
        message: 'Путь к картинке не может быть пустым'
    })
    avatar: string[]

    @IsNotEmpty({ message: 'Номер телефона нужно указать обязательно' })
    @IsPhoneNumber('IT')
    phone: string

    @IsOptional()
    @IsString()
    resident: string

    @IsOptional()
    @IsString()
    about_my: string
}
