import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class CreateBranchDto {
    @IsString({message: 'Напишите название филиала'})
    name: string

    @IsString({message: 'Нужно указать электронную почту'})
    @IsEmail({}, {message: 'Не верный формат почтового адреса!'})
    email: string

    @IsString({message: 'Не верный формат телефона'})
    @IsPhoneNumber()
    phone: string

    @IsPhoneNumber()
    @IsOptional()
    fax?: string

    @IsString({message: 'Укажите гда находится место работы'})
    location: string

    @IsString({message: ''})
    @IsOptional()
    logo?: string
}