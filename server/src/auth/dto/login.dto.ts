import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class LoginDto{
    @IsString({message: 'Email to by string'})
    @IsEmail({}, {message: 'Email incorrect'})
    email: string

    @IsString({message: 'Password to by string'})
    @MinLength(6, {message: 'Password length from 6 simbols'})
    password: string

    @IsOptional()
    @IsString()
    code: string
}